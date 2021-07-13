import { TodoRepository, TodoEntity } from '@nx-clean/todo-domain';
import { LocalStorageService } from '@nx-clean/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export class TodoLocalStorageRepository implements TodoRepository {
  constructor(private localStorageService: LocalStorageService) {}

  public getAllTodos(): Observable<TodoEntity[]> {
    return of(this.localStorageService.getItem<TodoEntity[]>('todos'));
  }

  public getCompletedTodos(): Observable<TodoEntity[]> {
    throw Error('not implemented');
  }

  public getActiveTodos(): Observable<TodoEntity[]> {
    throw Error('not implemented');
  }

  public getActiveTodosCount(): Observable<number> {
    return this.getActiveTodos().pipe(map((todos) => todos.length));
  }

  public addTodo(name: string): Observable<TodoEntity> {
    const todos: TodoEntity[] = this.localStorageService.getItem('todos') || [];
    const todo = TodoEntity.create({
      id: Math.random().toString(),
      name,
      completed: false,
    });

    this.localStorageService.setItem('todos', [...todos, todo]);

    return of(todo);
  }

  public getTodoById(id: string): Observable<TodoEntity> {
    const todos: TodoEntity[] = this.localStorageService.getItem('todos');
    return of<TodoEntity>(todos.find((todo) => todo.id === id) as TodoEntity);
  }

  public removeTodo(id: string): Observable<TodoEntity> {
    throw Error(id + 'not implemented');
  }

  public removeCompletedTodos(): Observable<TodoEntity[]> {
    throw Error('not implemented');
  }

  public markTodoAsCompleted(
    id: string,
    isCompleted: boolean
  ): Observable<TodoEntity> {
    throw Error(id + isCompleted + 'not implemented');
  }

  public markAllTodosAsCompleted(): Observable<TodoEntity[]> {
    throw Error('not implemented');
  }

  public markAllTodosAsActive(): Observable<TodoEntity[]> {
    throw Error('not implemented');
  }
}
