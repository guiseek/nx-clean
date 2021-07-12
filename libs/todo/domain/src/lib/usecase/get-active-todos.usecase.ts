import { TodoRepository } from '../repository/todo.repository';
import { TodoEntity } from '../entity/todo.entity';
import { Observable } from 'rxjs';
import { UseCase } from '@nx-clean/core';

export class GetActiveTodosUseCase implements UseCase<void, TodoEntity[]> {
  constructor(private todoRepository: TodoRepository) {}

  execute(): Observable<TodoEntity[]> {
    return this.todoRepository.getActiveTodos();
  }
}
