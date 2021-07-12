import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent {
  @Input() count: number | null;
  @Input() filter: string | null;
  @Output() all = new EventEmitter();
  @Output() active = new EventEmitter();
  @Output() completed = new EventEmitter();
  @Output() clearCompleted = new EventEmitter();

  constructor() {
    this.count = 0;
    this.filter = '';
  }

  onShowAll() {
    this.all.emit();
  }

  onShowActive() {
    this.active.emit();
  }

  onShowCompleted() {
    this.completed.emit();
  }

  onClearCompleted() {
    this.clearCompleted.emit();
  }
}
