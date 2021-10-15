import { TodoInMemoryRepository } from '@nx-clean/todo-data-access';
import { TodoRepository } from '@nx-clean/todo-domain';
import {
  TodoDefaultPresenter,
  TodoPresenter,
} from '@nx-clean/todo-presentation';

export class AppProvider {
  static withEnv({ production }: { production: boolean }) {
    return production ? AppProvider.forProd() : AppProvider.forDev();
  }

  private static forProd() {
    return AppProvider.forDev();
  }

  private static forDev() {
    return [
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
    ];
  }
}
