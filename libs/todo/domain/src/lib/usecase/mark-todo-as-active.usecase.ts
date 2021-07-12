import { TodoRepository } from '../repository/todo.repository';
import { TodoEntity } from '../entity/todo.entity';
import { UseCase } from '@nx-clean/core';
import { Observable } from 'rxjs';

export interface MarkTodoAsActiveUseCaseDto {
  id: string;
}

export class MarkTodoAsActiveUseCase implements UseCase<MarkTodoAsActiveUseCaseDto, TodoEntity> {
  constructor(private todoRepository: TodoRepository) { }

  execute(request: MarkTodoAsActiveUseCaseDto): Observable<TodoEntity> {
    return this.todoRepository.markTodoAsCompleted(request.id, false);
  }
}
