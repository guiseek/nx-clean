import { Type } from '../interfaces/type';
import 'reflect-metadata';

// This class decorator adds a boolean property to the class
// metadata, marking it as 'injectable'.
// It uses the reflect-metadata API.
export const INJECTABLE_METADATA_KEY = Symbol('INJECTABLE_KEY');

// We also provide an easy way to query whether a class is
// injectable. Our container will reject classes which aren't
// marked as injectable.
export function isInjectable<T>(target: Type<T>) {
  return Reflect.getMetadata(INJECTABLE_METADATA_KEY, target) === true;
}
