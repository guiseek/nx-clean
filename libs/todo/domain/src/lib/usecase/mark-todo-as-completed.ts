import { TodoRepository } from '../repository/todo.repository';
import { TodoEntity } from '../entity/todo.entity';
import { UseCase } from '@nx-clean/core';
import { Observable } from 'rxjs';

export interface MarkTodoAsCompletedUseCaseDto {
  id: string;
}

export class MarkTodoAsCompletedUseCase implements UseCase<MarkTodoAsCompletedUseCaseDto, TodoEntity> {
  constructor(private todoRepository: TodoRepository) { }

  execute(request: MarkTodoAsCompletedUseCaseDto): Observable<TodoEntity> {
    return this.todoRepository.markTodoAsCompleted(request.id, true);
  }
}
