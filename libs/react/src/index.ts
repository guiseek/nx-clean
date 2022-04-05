import { Provider, Injector, InjectionToken } from '@nx-clean/core';
import { createContext } from 'react';

const providers = new Map<InjectionToken<any>, Provider<any>>()

export const defineProviders = <T>(name: string, providers: Provider<T>[]) => {
  const injector = Injector.create(providers);

  const records: Record<string, any> = {};

  providers.forEach((provider) => {
    records[provider.provide.toString()] = injector.get(provider.provide);
  });

  const context = createContext(records);

  context.displayName = name;

  return context;
};

export { useServiceLocator } from './lib/use-service-locator'
