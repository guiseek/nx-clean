import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss'],
})
export class TodoHeaderComponent {
  name: string;
  isToggleAll: boolean;

  @Output() addItem = new EventEmitter<string>();
  @Output() toggleAllCompleted = new EventEmitter();
  @Output() toggleAllActive = new EventEmitter();

  constructor() {
    this.name = '';
    this.isToggleAll = false;
  }

  onAddItem() {
    this.addItem.next(this.name);
    this.name = '';
  }

  onToggleAllChange() {
    if (this.isToggleAll) {
      this.toggleAllCompleted.emit();
    } else {
      this.toggleAllActive.emit();
    }
  }
}
