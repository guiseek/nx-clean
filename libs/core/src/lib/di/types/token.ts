import { InjectionToken } from '../core/injection-token';
import { Type } from '../interfaces/type';

// Our combined Token type
export type Token<T> = Type<T> | InjectionToken;
