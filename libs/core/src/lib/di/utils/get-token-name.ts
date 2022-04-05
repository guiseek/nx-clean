import { InjectionToken } from '../core/injection-token';
import { Token } from '../types/token';

export function getTokenName<T>(token: Token<T>) {
  return token instanceof InjectionToken ? token.toString() : token.name;
}
