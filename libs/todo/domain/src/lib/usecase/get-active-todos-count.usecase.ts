import { TodoRepository } from '../repository/todo.repository';
import { UseCase } from '@nx-clean/core';
import { Observable } from 'rxjs';

export class GetActiveTodosCountUseCase implements UseCase<void, number> {
  constructor(private todoRepository: TodoRepository) {}

  execute(): Observable<number> {
    return this.todoRepository.getActiveTodosCount();
  }
}
