# Core

## Install

```sh
npm i @nx-clean/core
```

---

## Dependency providers

### Defining providers

The provider configuration is an object literal with two properties:

- The provide property holds the token that serves as the key for both locating a dependency value and configuring the injector.

- The second property is a provider definition object, which tells the injector how to create the dependency value. The provider-definition key can be useClass, as in the example. It can also be useValue, or useFactory. Each of these keys provides a different type of dependency, as discussed in the following section.

`app.provider.ts`

```ts
import { Injector } from '@nx-clean/core';

class SomeService {
  constructor() { }
}

const injector = Injector.create([
  { provide: SomeService, useClass: SomeService },
]);

const instance = injector.get<SomeService>(SomeService);
```

<details>
  <summary> console.log(instance) </summary>

```ts
SomeService {}
```

</details>

<br>


### Injecting a configuration object

A common use case for object literals is a configuration object. The following configuration object includes an address of a web API endpoint.

`app.provider.ts`
```ts
import { Inject, Injectable, InjectionToken, Injector } from '@nx-clean/core';

interface ApiConfig {
  url: string
}

const API_CONFIG: ApiConfig = {
  url: 'https://api.clean-architecture.design'
}
```

To provide and inject the configuration object, specify the object in the Injector as providers array.

`app.provider.ts`
```ts
const injector = Injector.create([
  { provide: API_TOKEN, useValue: API_CONFIG }
])
```

### Using an InjectionToken object

Define and use an InjectionToken object for choosing a provider token for non-class dependencies. The following example defines a token, APP_CONFIG of the type InjectionToken.

The optional type parameter, `<AppConfig>`, and the token description, api.config, specify the token's purpose.

`app.provider.ts`
```ts
const API_TOKEN = new InjectionToken<ApiConfig>('api.config');
```

Next, register the dependency provider in the service using the InjectionToken object of `API_CONFIG`.

`app.provider.ts`
```ts
const injector = Injector.create([
  { provide: API_TOKEN, useValue: API_CONFIG }
])
```

Now get the configuration object using Injector's get method

`app.provider.ts`
```ts
const config = injector.get<ApiConfig>(API_TOKEN)
```

<details>
  <summary> console.log(config) </summary>

```ts
{url: 'https://api.clean-architecture.design'}
```

</details>

<br>

Now, inject the configuration object into the constructor with @Inject() parameter decorator.

`app.provider.ts`
```ts
@Injectable()
class SomeService {
  constructor(@Inject(API_TOKEN) public config: ApiConfig) { }
}
```

### Specifying an alternative class provider

Different classes can provide the same service. For example, the following code tells the injector to return a BetterLogger instance when the component asks for a logger using the Logger token.

`app.provider.ts`
```ts
abstract class OneService { }

@Injectable()
class SomeService implements OneService {
  constructor(@Inject(API_TOKEN) public config: ApiConfig) { }
}

const injector = Injector.create([
  { provide: API_TOKEN, useValue: API_CONFIG },
  { provide: OneService, useClass: SomeService }
])

const instance = injector.get<OneService>(OneService)
```

<details>
  <summary> console.log(instance) </summary>

```ts
SomeService {config: {…}}
  config:
    url: "https://api.clean-architecture.design"
```

</details>

<br>

### Configuring class providers with dependencies

If the alternative class providers have their own dependencies, specify both providers in the providers metadata property of the parent module or component.


`app.provider.ts`
```ts
@Injectable()
class InjectableClass {
    constructor(public oneService: OneService) {}
}

const injector = Injector.create([
  { provide: API_TOKEN, useValue: API_CONFIG },
  { provide: OneService, useClass: SomeService },
  { provide: InjectableClass, useClass: InjectableClass }
])

const instance = injector.get<InjectableClass>(InjectableClass)
```

<details>
  <summary> console.log(instance) </summary>

```ts
InjectableClass {oneService: SomeService}
  oneService: SomeService
    config:
      url: "https://api.clean-architecture.design"
```

</details>

<br>

### Completed example code

`app.provider.ts`

```ts
import { Inject, Injectable, InjectionToken, Injector } from '@nx-clean/core';

interface ApiConfig {
  url: string
}

const API_CONFIG: ApiConfig = {
  url: 'https://api.clean-architecture.design'
}

const API_TOKEN = new InjectionToken<ApiConfig>('api-token');

abstract class OneService { }

@Injectable()
class SomeService implements OneService {
  constructor(@Inject(API_TOKEN) public config: ApiConfig) { }
}

@Injectable()
class InjectableClass {
    constructor(public oneService: OneService) {}
}

const injector = Injector.create([
  { provide: API_TOKEN, useValue: API_CONFIG },
  { provide: OneService, useClass: SomeService },
  { provide: InjectableClass, useClass: InjectableClass }
])

const instance = injector.get<InjectableClass>(InjectableClass)
```

### Demos

- Angular [Demo](https://clean-architecture.design/angular) [Source code](../../apps/todo/angular/src/app/todo)
- React [Demo](https://clean-architecture.design/react) [Source code](../../apps/todo/react/src/app)
- Web Component [Demo](https://clean-architecture.design/web) [Source code](../../apps/todo/web/src/app)


![Nx Clean Core - Base for all](../../assets/base.svg)
