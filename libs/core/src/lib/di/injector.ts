import { isClassProvider, isValueProvider } from './utils/provider';
import { getInjectionToken } from './utils/injection-token';
import { InjectableParam } from './types/injectable-param';
import { InjectionToken } from './core/injection-token';
import { isInjectable } from './utils/injectable';
import { REFLECT_PARAMS } from './utils/reflect';
import { Type } from './interfaces/type';
import { Token } from './types/token';
import {
  ValueProvider,
  Provider,
  ClassProvider,
  FactoryProvider,
} from './interfaces/provider';

export class Injector {
  private static instance: Injector;

  private providers = new Map<Token<any>, Provider<any>>();

  private constructor(providers: Provider<any>[]) {
    providers.forEach((provider) => {
      this.assertInjectableIfClassProvider(provider);
      this.providers.set(provider.provide, provider);
    });
  }

  addProvider<T>(provider: Provider<T>) {
    this.assertInjectableIfClassProvider(provider);
    this.providers.set(provider.provide, provider);
  }

  static create<T>(providers: Provider<T>[]) {
    if (!Injector.instance) {
      Injector.instance = new Injector(providers);
    }

    return Injector.instance;
  }

  private assertInjectableIfClassProvider<T>(provider: Provider<T>) {
    if (isClassProvider(provider) && !isInjectable(provider.useClass)) {
      throw new Error(
        `Cannot provide ${this.getTokenName(
          provider.provide
        )} using class ${this.getTokenName(
          provider.useClass
        )}, ${this.getTokenName(provider.useClass)} isn't injectable`
      );
    }
  }

  // Retorna um nome para o token.
  private getTokenName<T>(token: Token<T>) {
    return token instanceof InjectionToken
      ? token.toString()
      : token.name;
  }

  get<T>(type: Token<T>): T {
    const provider = this.providers.get(type);
    return this.injectWithProvider(type, provider);
  }

  private injectWithProvider<T>(type: Token<T>, provider?: Provider<T>): T {
    if (provider === undefined) {
      throw new Error(`No provider for type ${this.getTokenName(type)}`);
    }
    if (isClassProvider(provider)) {
      return this.injectClass(provider as ClassProvider<T>);
    } else if (isValueProvider(provider)) {
      return this.injectValue(provider as ValueProvider<T>);
    } else {
      // Fornecedor da factory por processo de eliminação
      return this.injectFactory(provider as FactoryProvider<T>, provider.deps);
    }
  }

  private injectValue<T>(valueProvider: ValueProvider<T>): T {
    return valueProvider.useValue;
  }

  private injectFactory<T>(
    valueProvider: FactoryProvider<T>,
    tokens: Token<T>[] = []
  ): T {
    return valueProvider.useFactory(...tokens.map((token) => this.get(token)));
  }

  private injectClass<T>(classProvider: ClassProvider<T>): T {
    const target = classProvider.useClass;
    const params = this.getInjectedParams(target);
    return Reflect.construct(target, params);
  }

  private getInjectedParams<T>(target: Type<T>) {
    const argTypes = Reflect.getMetadata(REFLECT_PARAMS, target) as (
      | InjectableParam
      | undefined
    )[];
    if (argTypes === undefined) {
      return [];
    }
    return argTypes.map((argType, index) => {
      // A API reflet-metadata falha em dependências circulares e,
      // em vez disso, retorna indefinido para o argumento.
      // Até resolver isso melhor, apenas lançamos um erro.
      if (argType === undefined) {
        throw new Error(
          `Injection error. Recursive dependency detected in constructor for type ${target.name} with parameter at index ${index}`
        );
      }
      // Verifique se um 'Inject(INJECTION_TOKEN)' foi adicionado ao parâmetro.
      // Ele sempre tem prioridade sobre os tipos de parâmetros.
      const overrideToken = getInjectionToken(target, index);
      const actualToken = overrideToken === undefined ? argType : overrideToken;
      const provider = this.providers.get(actualToken);
      return this.injectWithProvider(actualToken, provider);
    });
  }
}
