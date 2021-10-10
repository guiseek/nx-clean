export class InjectionToken<T = any> {
  constructor(
    protected injectionIdentifier: string,
    options?: {
      factory: () => T;
    }
  ) {
    console.log(options);
  }

  toString(): string {
    return this.injectionIdentifier
  }
}
