import { TodoRepository } from '../repository/todo.repository';
import { TodoEntity } from '../entity/todo.entity';
import { UseCase } from '@nx-clean/core';
import { Observable } from 'rxjs';

export interface RemoveTodoUseCaseDto {
  id: string;
}

export class RemoveTodoUseCase
  implements UseCase<RemoveTodoUseCaseDto, TodoEntity>
{
  constructor(private todoRepository: TodoRepository) {}

  execute(request: RemoveTodoUseCaseDto): Observable<TodoEntity> {
    return this.todoRepository.removeTodo(request.id);
  }
}
