import { TodoMockDto } from '../dto/todo-mock.dto';
import { TodoEntity } from '@nx-clean/todo-domain';
import { Mapper } from '@nx-clean/core';

export class TodoMockMapper implements Mapper<TodoEntity, TodoMockDto> {
  mapFrom(input: TodoEntity): TodoMockDto {
    return {
      id: input?.id,
      title: input?.name,
      completed: input?.completed,
    };
  }

  mapTo(input: TodoMockDto): TodoEntity {
    const todo = TodoEntity.create({
      id: input?.id,
      name: input?.title,
      completed: input?.completed,
    });

    return todo;
  }
}
