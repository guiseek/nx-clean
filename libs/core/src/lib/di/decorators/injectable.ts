import { INJECTABLE_METADATA_KEY } from '../utils/injectable';

export function Injectable<T extends object>() {
  return function (target: T) {
    // o target, neste caso, é a classe que está sendo decorada.
    Reflect.defineMetadata(INJECTABLE_METADATA_KEY, true, target);
    return target;
  };
}
