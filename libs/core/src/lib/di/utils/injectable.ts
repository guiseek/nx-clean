import { Type } from '../interfaces/type';
import 'reflect-metadata';

// Este decorador de classe adiciona uma propriedade booleana
// aos metadados da classe, marcando-a como 'injetável'.
// Ele usa a API reflet-metadata.
export const INJECTABLE_METADATA_KEY = Symbol('INJECTABLE_KEY');

// Também fornecemos uma maneira fácil de consultar se uma classe é injetável.
// Nosso contêiner rejeitará classes que não são marcadas como injetáveis.
export function isInjectable<T>(target: Type<T>) {
  return Reflect.getMetadata(INJECTABLE_METADATA_KEY, target) === true;
}
