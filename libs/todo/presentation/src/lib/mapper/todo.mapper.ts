import { TodoVM } from '../viewmodel/todos.viewmodel';
import { TodoEntity } from '@todo/todo-domain';
import { Mapper } from '@todo/core';

export class TodoViewModelMapper implements Mapper<TodoEntity, TodoVM> {
  mapFrom(input: TodoEntity): TodoVM {
    return { id: input.id, name: input.name, completed: input.completed };
  }

  mapTo(input: TodoVM): TodoEntity {
    return { id: input.id, name: input.name, completed: input.completed };
  }
}
