import { Provider } from '../interfaces/provider';
import { getTokenName } from './get-token-name';
import { isClassProvider } from './provider';
import { isInjectable } from './injectable';

export const assertInjectableIfClassProvider = <T>(provider: Provider<T>) => {
  if (isClassProvider(provider) && !isInjectable(provider.useClass)) {
    throw new Error(
      `Cannot provide ${getTokenName(
        provider.provide
      )} using class ${getTokenName(provider.useClass)}, ${getTokenName(
        provider.useClass
      )} isn't injectable`
    );
  }
};
