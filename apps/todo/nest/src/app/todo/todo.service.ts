import { Injectable } from '@nestjs/common';
import { TodoEntity } from '@nx-clean/todo-domain';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  todos: TodoEntity[] = [];

  create({ id, title, completed }: CreateTodoDto) {
    const todo: TodoEntity = { completed, name: title, id: id + '' }
    this.todos.push(todo);
  }

  findAll() {
    return this.todos;
  }

  findCompletedTodos() {
    return this.todos.filter((todo) => todo.completed);
  }

  findActiveTodos() {
    return this.todos.filter((todo) => !todo.completed);
  }

  markAllAsCompletedTodos() {
    this.todos = this.todos.map((todo) => ({ ...todo, completed: true }));
    return this.todos;
  }

  public markTodoAsCompleted(id: string, isCompleted: boolean) {
    const todo = this.todos.find((t) => t.id == id);
    if (todo) todo.completed = isCompleted;

    return todo;
  }

  public markTodoAsActive(id: string, isCompleted: boolean) {
    const todo = this.todos.find((t) => t.id == id);
    if (todo) todo.completed = isCompleted;

    return todo;
  }

  markAllAsActiveTodos() {
    this.todos = this.todos.map((todo) => ({ ...todo, active: false }));
    return this.todos;
  }

  findOne(id: string) {
    return this.todos.find((todo) => todo.id === id);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    const idx = this.todos.findIndex((t) => t.id === id);
    const todo = this.todos.find((t) => t.id === id);
    this.todos[idx + ''] = { ...todo, ...updateTodoDto };
    return this.todos[idx];
  }

  remove(id: string) {
    const idx = this.todos.findIndex((t) => t.id === id);
    const todo = this.todos.find((t) => t.id === id);

    this.todos.splice(idx, 1);

    return todo;
  }
}
