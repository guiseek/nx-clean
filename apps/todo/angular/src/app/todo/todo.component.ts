import { TodoPresenter, TodoVM } from '@nx-clean/todo-presentation';
import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodosComponent } from './todos/todos.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'todo-angular',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
    standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      TodoComponent,
      TodoItemComponent,
      TodoHeaderComponent,
      TodosComponent,
      TodoFooterComponent,
      AsyncPipe,
    ],
})
export class TodoComponent {
  todos$ = this.todoApp.todos$;
  filter$ = this.todoApp.filter$;

  activeTodosCount$ = this.todoApp.activeTodosCount$;

  constructor(private todoApp: TodoPresenter) {
    this.todoApp.getAllTodos();
  }

  onAddItem(name: string) {
    this.todoApp.addTodo(name);
  }

  onCheckItem(todo: TodoVM) {
    this.todoApp.markTodoAsCompleted(todo.id);
  }

  onUncheckItem(todo: TodoVM) {
    this.todoApp.markTodoAsActive(todo.id);
  }

  onShowAll() {
    this.todoApp.getAllTodos();
  }

  onShowActive() {
    this.todoApp.getActiveTodos();
  }

  onShowCompleted() {
    this.todoApp.getCompletedTodos();
  }

  onClearCompleted() {
    this.todoApp.removeCompletedTodos();
  }

  onRemoveItem(todo: TodoVM) {
    this.todoApp.removeTodo(todo.id);
  }

  onToggleAllCompleted() {
    this.todoApp.markAllTodosAsCompleted();
  }

  onToggleAllActive() {
    this.todoApp.markAllTodosAsActive();
  }
}
