// TODO: remove this eslint and resolve the banned type issue
/* eslint-disable @typescript-eslint/ban-types */
export interface Type<T> extends Function {
  // Pode possuir um construtor com argumentos.
  new?(...args: any[]): T;
}
