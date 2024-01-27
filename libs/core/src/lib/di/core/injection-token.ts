export class InjectionToken<T = unknown> {
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
