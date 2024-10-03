import { INJECT_METADATA_KEY } from '../utils/injection-token';
import { Token } from '../types/token';

export function Inject<T extends object>(token: Token<T>) {
  return function (target: T, _: string | symbol, index: number) {
    Reflect.defineMetadata(
      INJECT_METADATA_KEY,
      token,
      target,
      `index-${index}`
    );
  };
}
