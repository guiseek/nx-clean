import { TodoInMemoryRepository } from '@nx-clean/todo-data-access';
import { TodoRepository } from '@nx-clean/todo-domain';
import { Injector } from '@nx-clean/core';
import {
  TodoPresenter,
  TodoDefaultPresenter,
} from '@nx-clean/todo-presentation';

export const injector = Injector.create([
  {
    provide: TodoRepository,
    useFactory: () => {
      return new TodoInMemoryRepository([
        { id: '1', title: 'Front-end 1', completed: true },
        { id: '2', title: 'Front-end 2', completed: false },
        { id: '3', title: 'Front-end 3', completed: true },
        { id: '4', title: 'Front-end 4', completed: false },
      ]);
    },
  },
  {
    provide: TodoPresenter,
    useFactory: (repo: TodoRepository) => {
      return new TodoDefaultPresenter(repo);
    },
    deps: [TodoRepository],
  },
]);
