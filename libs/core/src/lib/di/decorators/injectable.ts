import { INJECTABLE_METADATA_KEY } from '../utils/injectable';

export function Injectable() {
  return function (target: any) {
    // target in this case is the class being decorated.
    Reflect.defineMetadata(INJECTABLE_METADATA_KEY, true, target);
    return target;
  };
}
