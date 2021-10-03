export interface Type<T> extends Function {
  // Has a constructor which takes any number of arguments. 
  // Can be an implicit constructor.   
  new?(...args: any[]): T;
}
