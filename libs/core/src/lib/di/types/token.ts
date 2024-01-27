import { InjectionToken } from '../core/injection-token';
import { Type } from '../interfaces/type';

// Nossos tipos de tokens combinados
export type Token<T = unknown> = Type<T> | InjectionToken;
