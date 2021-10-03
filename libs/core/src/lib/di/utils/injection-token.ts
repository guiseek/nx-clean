import { Token } from '../types/token';
import 'reflect-metadata';

export const INJECT_METADATA_KEY = Symbol('INJECT_KEY');

// Este é um decorador de parâmetro, é necessário um token para mapear o parâmetro.
export function getInjectionToken(target: any, index: number) {
  return Reflect.getMetadata(INJECT_METADATA_KEY, target, `index-${index}`) as
    | Token<any>
    | undefined;
}
