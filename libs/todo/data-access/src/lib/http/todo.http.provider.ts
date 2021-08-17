import { TodoHttpRepository } from './todo.http.repository';
import { TodoRepository } from '@nx-clean/todo-domain';
import { HttpService } from '@nx-clean/core';

export class TodoHttpProvider {
  static forRoot(useClass: new (...params: any[]) => void) {
    return [
      { provide: HttpService, useClass },
      {
        provide: TodoRepository,
        useFactory: (httpService: HttpService) => {
          return new TodoHttpRepository(httpService);
        },
        deps: [HttpService],
      },
    ];
  }
}
