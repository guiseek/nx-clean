import { TodoVM } from '../viewmodel/todos.viewmodel';
import { TodoEntity } from '@nx-clean/todo-domain';
import { Mapper } from '@nx-clean/core';

export class TodoViewModelMapper implements Mapper<TodoEntity, TodoVM> {
  mapFrom(input: TodoEntity): TodoVM {
    return { id: input.id, name: input.name, completed: input.completed };
  }

  mapTo(input: TodoVM): TodoEntity {
    return { id: input.id, name: input.name, completed: input.completed };
  }
}
