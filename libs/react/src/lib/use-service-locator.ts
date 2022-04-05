import {
  Type,
  Token,
  Provider,
  getTokenName,
  ClassProvider,
  ValueProvider,
  REFLECT_PARAMS,
  FactoryProvider,
  isClassProvider,
  isValueProvider,
  InjectableParam,
  getInjectionToken,
  assertInjectableIfClassProvider,
} from '@nx-clean/core';

const _providers = new Map<Token<any>, Provider<any>>();

export const useServiceLocator = <T>(
  providers: Provider<any>[] = [],
): [<T>(type: Token<T>) => T, <T>(provider: Provider<T>) => void] => {

  providers.forEach((provider) => {
    assertInjectableIfClassProvider(provider);
    _providers.set(provider.provide, provider);
  });

  const addProvider = <T>(provider: Provider<T>) => {
    assertInjectableIfClassProvider(provider);
    _providers.set(provider.provide, provider);
  };

  // Retorna um nome para o token.
  const get = <T>(type: Token<T>): T => {
    const provider = _providers.get(type);
    return injectWithProvider(type, provider);
  };

  const injectWithProvider = <T>(type: Token<T>, provider?: Provider<T>): T => {
    if (provider === undefined) {
      throw new Error(`No provider for type ${getTokenName(type)}`);
    }
    if (isClassProvider(provider)) {
      return injectClass(provider as ClassProvider<T>);
    } else if (isValueProvider(provider)) {
      return injectValue(provider as ValueProvider<T>);
    } else {
      // Fornecedor da factory por processo de eliminação
      return injectFactory(provider as FactoryProvider<T>, provider.deps);
    }
  };

  const injectValue = <T>(valueProvider: ValueProvider<T>): T => {
    return valueProvider.useValue;
  };

  const injectFactory = <T>(
    valueProvider: FactoryProvider<T>,
    tokens: Token<T>[] = []
  ): T => {
    return valueProvider.useFactory(...tokens.map((token) => get(token)));
  };

  const injectClass = <T>(classProvider: ClassProvider<T>): T => {
    const target = classProvider.useClass;
    const params = getInjectedParams(target);
    return Reflect.construct(target, params);
  };

  const getInjectedParams = <T>(target: Type<T>) => {
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
      const provider = _providers.get(actualToken);
      return injectWithProvider(actualToken, provider);
    });
  };

  return [get, addProvider];
};
