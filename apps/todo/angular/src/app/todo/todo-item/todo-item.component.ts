import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { TodoVM } from '@nx-clean/todo-presentation';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: '[todo-item]',
    templateUrl: './todo-item.component.html',
    standalone: true,
    imports: [
        ReactiveFormsModule,
    ],
})
export class TodoItemComponent implements OnChanges {
  @Input() todo!: TodoVM;
  @Output() toggle = new EventEmitter<boolean>();
  @Output() remove = new EventEmitter();

  checkbox = new FormControl({ value: false, disabled: false });

  ngOnChanges() {
    this.checkbox.setValue(this.todo.completed, { emitEvent: false });
  }
  onToggleItem(checked: boolean) {
    this.toggle.next(checked);
  }

  onRemoveItem() {
    this.remove.emit();
  }
}
