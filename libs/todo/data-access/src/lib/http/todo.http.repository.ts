import { TodoEntity, TodoRepository } from '@nx-clean/todo-domain';
import { TodoHttpMapper } from './mapper/todo-http.mapper';
import { TodoHttpDto } from './dto/todo-http.dto';
import { HttpService } from '@nx-clean/core';
import { map, Observable } from 'rxjs';

export class TodoHttpRepository implements TodoRepository {
  constructor(private http: HttpService) { }

  private mapper = new TodoHttpMapper();

  public getAllTodos() {
    return this.http.get<TodoEntity[]>('/api/todos');
  }

  public getCompletedTodos() {
    return this.http.get<TodoEntity[]>('/api/todos/completed');
  }

  public getActiveTodos() {
    return this.http.get<TodoEntity[]>('/api/todos/completed');
  }

  public getActiveTodosCount() {
    return this.getActiveTodos().pipe(map((todos) => todos.length));
  }

  public addTodo(name: string) {
    const id = new Date().getTime();
    const todo: TodoHttpDto = { id: id, title: name, completed: false };
    console.log(todo);
    return this.http
      .post<TodoHttpDto, TodoEntity>('/api/todos', todo)
      .pipe(map(() => this.mapper.mapTo(todo)));
  }

  public getTodoById(id: string) {
    return this.http.get<TodoEntity>(`/api/todos/${id}`);
  }

  public removeTodo(id: string) {
    return this.http.delete<TodoEntity>(`/api/todos/${id}`);
  }

  public removeCompletedTodos(): Observable<TodoEntity[]> {
    return this.http.delete('/api/todos/completed');
  }

  public markTodoAsCompleted(id: string, isCompleted: boolean) {
    return this.http.post<{ isCompleted: boolean }, TodoEntity>(
      `/api/todos/${id}/completed`,
      { isCompleted }
    );
  }

  public markAllTodosAsCompleted() {
    return this.http.post<null, TodoEntity[]>(`/api/todos/completed`, null);
  }

  public markAllTodosAsActive(): Observable<TodoEntity[]> {
    return this.http.post<null, TodoEntity[]>(`/api/todos/active`, null);
  }
}
