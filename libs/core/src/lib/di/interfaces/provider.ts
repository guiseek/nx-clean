import { Token } from '../types/token';
import { Type } from './type';

export interface BaseProvider<T> {
  provide: Token<T>;
  deps?: Token<any>[];
}

export interface ClassProvider<T> extends BaseProvider<T> {
  useClass: Type<T>;
}

export interface ValueProvider<T> extends BaseProvider<T> {
  useValue: T;
}

// Para manter as coisas simples, uma factory é
// uma função que retorna a real implementação.
export type Factory<T> = (...params: any[]) => T;

export interface FactoryProvider<T> extends BaseProvider<T> {
  useFactory: Factory<T>;
}

export type Provider<T> =
  | ClassProvider<T>
  | ValueProvider<T>
  | FactoryProvider<T>;
