import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoVM } from '@nx-clean/todo-presentation';

@Component({
  selector: '[todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo!: TodoVM;
  @Output() toggle = new EventEmitter<boolean>();
  @Output() remove = new EventEmitter();

  constructor() {}

  onToggleItem(checked: boolean) {
    this.toggle.next(checked);
  }

  onRemoveItem() {
    this.remove.emit();
  }
}
