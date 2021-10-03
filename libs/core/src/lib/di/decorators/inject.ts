import { INJECT_METADATA_KEY } from '../utils/injection-token';
import { Token } from '../types/token';

export function Inject(token: Token<any>) {
  return function (target: any, _: string | symbol, index: number) {
    Reflect.defineMetadata(
      INJECT_METADATA_KEY,
      token,
      target,
      `index-${index}`
    );
    return target;
  };
}
