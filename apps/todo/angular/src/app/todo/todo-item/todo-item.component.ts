import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoVM } from '@nx-clean/todo-presentation';
import { FormControl } from '@angular/forms';

@Component({
  selector: '[todo-item]',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input() todo!: TodoVM;
  @Output() toggle = new EventEmitter<boolean>();
  @Output() remove = new EventEmitter();

  checkbox = new FormControl()

  onToggleItem(checked: boolean) {
    this.toggle.next(checked);
  }

  onRemoveItem() {
    this.remove.emit();
  }
}
