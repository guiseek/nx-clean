import { InjectionToken } from './core/injection-token';
import { Inject, Injectable } from './decorators';
import { Injector } from './injector';

/**
 * Mocks for real use cases
 */

interface ApiConfig {
  url: string;
}

const API_TOKEN = new InjectionToken<ApiConfig>('api.config');

abstract class Repository {
  protected api: string;

  constructor(config: ApiConfig) {
    this.api = config.url;
  }

  abstract getAll<T>(): Promise<T[]>;
}

@Injectable()
class DataRepository extends Repository {
  constructor(@Inject(API_TOKEN) config: ApiConfig) {
    super(config);
  }

  getAll() {
    return Promise.resolve([]);
  }
}

abstract class Presenter {
  constructor(public repository: Repository) {}

  abstract getAll(): Promise<unknown[]>;
}

@Injectable()
class UiPresenter implements Presenter {
  constructor(public repository: Repository) {}

  getAll(): Promise<unknown[]> {
    return this.repository.getAll();
  }
}

describe('Injector', () => {
  let injector: Injector;

  const API_CONFIG: ApiConfig = {
    url: 'https://api.clean-architecture.design',
  };

  beforeEach(() => {
    injector = Injector.create([
      { provide: API_TOKEN, useValue: API_CONFIG },
      { provide: DataRepository, useClass: DataRepository },
      { provide: Repository, useClass: DataRepository },
      {
        provide: Presenter,
        useFactory: (repo: Repository) => new UiPresenter(repo),
        deps: [Repository],
      }
    ]);
  });

  it('should be Injector instance', () => {
    expect(injector).toBeInstanceOf(Injector);
  });

  it('should return config object when asking api token', () => {
    const config = injector.get<ApiConfig>(API_TOKEN);
    expect(config).toStrictEqual({
      url: 'https://api.clean-architecture.design',
    });
  });

  it('should return data repository when asking repository', () => {
    const service = injector.get(Repository);
    expect(service).toBeInstanceOf(DataRepository);
  });

  it('should return ui presenter when asking presenter', () => {
    const presenter = injector.get(Presenter);
    expect(presenter).toBeInstanceOf(UiPresenter);
  });
});
