import { TodoHttpDto } from '../dto/todo-http.dto';
import { TodoEntity } from '@nx-clean/todo-domain';
import { Mapper } from '@nx-clean/core';

export class TodoHttpMapper implements Mapper<TodoEntity, TodoHttpDto> {
  mapFrom(input: TodoEntity): TodoHttpDto {
    return {
      id: +input?.id,
      title: input?.name,
      completed: input?.completed,
    };
  }

  mapTo(input: TodoHttpDto): TodoEntity {
    const todo = TodoEntity.create({
      id: input?.id + '',
      name: input?.title,
      completed: input?.completed,
    });

    return todo;
  }
}
