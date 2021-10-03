/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
type Constructor = new (...params: unknown[]) => void;

/**
 * PRIMEIRA POC
 * @deprecated
 */

export interface FactorySansProvider {
  useFactory: Function;
  deps?: any[];
}

export interface FactoryProvider extends FactorySansProvider {
  provide: any;
  multi?: boolean;
}

export type Provider = FactoryProvider | Constructor;

export class Injector {
  private static instance: Injector;

  private _container = new Map();

  private constructor(private _providers: Provider[]) {
    this._providers.forEach((provider) => {
      const factory = provider as FactoryProvider;

      if (factory.provide && factory.useFactory) {
        const { provide, useFactory, deps = [] } = factory;

        const getDependency = (dependency: Constructor) => {
          const dep = this.get(dependency);
          return dep ? dep : new dependency();
        };

        const dependencies = deps.length > 0 ? deps.map(getDependency) : [];

        this._container.set(provide, useFactory(...dependencies));
      } else {
        this._providers.forEach((provider) => {
          this._container.set(provider, new (provider as Constructor)());
        });
      }
    });
  }

  static create(_providers: Provider[]) {
    if (!Injector.instance) {
      Injector.instance = new Injector(_providers);
    }

    return Injector.instance;
  }

  get<T>(token: FactoryProvider['provide']) {
    const instance = this._container.get(token) as T;

    if (!instance) {
      throw Error('No provider instance');
    }

    return instance;
  }

  public static getInstance(): Injector {
    if (!Injector.instance) {
      Injector.instance = new Injector([]);
    }

    return Injector.instance;
  }
}
