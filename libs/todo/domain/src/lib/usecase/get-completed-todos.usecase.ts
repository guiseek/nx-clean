import { TodoRepository } from '../repository/todo.repository';
import { TodoEntity } from '../entity/todo.entity';
import { UseCase } from '@nx-clean/core';
import { Observable } from 'rxjs';

export class GetCompletedTodosUseCase implements UseCase<void, TodoEntity[]> {
  constructor(private todoRepository: TodoRepository) {}

  execute(): Observable<TodoEntity[]> {
    return this.todoRepository.getCompletedTodos();
  }
}
