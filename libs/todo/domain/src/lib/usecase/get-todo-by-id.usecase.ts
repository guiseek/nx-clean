import { TodoRepository } from '../repository/todo.repository';
import { TodoEntity } from '../entity/todo.entity';
import { UseCase } from '@nx-clean/core';
import { Observable } from 'rxjs';

export interface GetTodoByIdUseCaseDto {
  id: string;
}

export class GetTodoByIdUseCase
  implements UseCase<GetTodoByIdUseCaseDto, TodoEntity>
{
  constructor(private todoRepository: TodoRepository) {}

  execute(request: GetTodoByIdUseCaseDto): Observable<TodoEntity> {
    return this.todoRepository.getTodoById(request.id);
  }
}
