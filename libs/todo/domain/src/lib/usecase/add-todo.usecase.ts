import { UseCase } from '@nx-clean/core';
import { TodoRepository } from '../repository/todo.repository';
import { TodoEntity } from '../entity/todo.entity';
import { Observable } from 'rxjs';

export interface AddTodoUseCaseDTO {
  name: string;
}

export class AddTodoUseCase implements UseCase<AddTodoUseCaseDTO, TodoEntity> {
  constructor(private todoRepository: TodoRepository) { }

  execute(request: AddTodoUseCaseDTO): Observable<TodoEntity> {
    return this.todoRepository.addTodo(request.name);
  }
}
