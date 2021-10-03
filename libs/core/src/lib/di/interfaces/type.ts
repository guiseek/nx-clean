export interface Type<T> extends Function {
  // Pode possuir um construtor com argumentos.
  new?(...args: any[]): T;
}
