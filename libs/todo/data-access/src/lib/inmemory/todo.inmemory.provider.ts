import { TodoInMemoryRepository } from '../inmemory/todo.inmemory.repository';
import { TodoMockDto } from '../inmemory/dto/todo-mock.dto';
import { TodoRepository } from '@nx-clean/todo-domain';

export class TodoInMemoryProvider {
  static forRoot(data: TodoMockDto[] = []) {
    return {
      provide: TodoRepository,
      useFactory: () => {
        return new TodoInMemoryRepository(data);
      },
    };
  }
}
