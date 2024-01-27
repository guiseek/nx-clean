export interface Type<T> extends ReturnType<FunctionConstructor> {
  // Pode possuir um construtor com argumentos.
  new?(...args: unknown[]): T;
}
