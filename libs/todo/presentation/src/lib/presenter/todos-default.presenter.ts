import { TodoStateVM, TodoVM } from '../viewmodel/todos.viewmodel';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { TodoViewModelMapper } from '../mapper/todo.mapper';
import { TodoPresenter } from './todo.presenter';
import { map, switchMap } from 'rxjs/operators';
import {
  TodoRepository,
  FilterTodosUseCase,
  GetActiveTodosCountUseCase,
  GetActiveTodosUseCase,
  GetAllTodosUseCase,
  GetCompletedTodosUseCase,
  MarkAllTodosAsActiveUseCase,
  MarkAllTodosAsCompletedUseCase,
  MarkTodoAsActiveUseCase,
  MarkTodoAsCompletedUseCase,
} from '@nx-clean/todo-domain';

export class TodosDefaultPresenter {
}
