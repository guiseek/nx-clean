import { Token } from '../types/token';
import 'reflect-metadata';

export const INJECT_METADATA_KEY = Symbol('INJECT_KEY');

// This is a parameter decorator, it takes a token to map the parameter to.
export function getInjectionToken(target: any, index: number) {
  return Reflect.getMetadata(INJECT_METADATA_KEY, target, `index-${index}`) as
    | Token<any>
    | undefined;
}
