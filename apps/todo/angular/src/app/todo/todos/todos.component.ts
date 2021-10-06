import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoVM } from '@nx-clean/todo-presentation';

@Component({
  selector: 'todo-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent {
  @Input() todos: TodoVM[] | null;
  @Output() checkItem = new EventEmitter<TodoVM>();
  @Output() uncheckItem = new EventEmitter<TodoVM>();
  @Output() removeItem = new EventEmitter<TodoVM>();

  constructor() {
    this.todos = [];
  }

  onCheckItem(todo: TodoVM, checked: boolean) {
    if (checked) {
      this.checkItem.next(todo);
    } else {
      this.uncheckItem.next(todo);
    }
  }

  onRemoveItem(todo: TodoVM) {
    this.removeItem.next(todo);
  }
}
