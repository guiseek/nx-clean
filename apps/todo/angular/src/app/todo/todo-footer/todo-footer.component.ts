import {
  Input,
  Output,
  OnDestroy,
  Component,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

export type FilterValue = 'all' | 'active' | 'completed';

@Component({
  selector: 'todo-footer',
  templateUrl: './todo-footer.component.html',
})
export class TodoFooterComponent implements AfterViewInit, OnDestroy {
  private _destroy = new Subject<void>();

  @Input() count: number | null = 0;
  @Input() filter: string | null = '';

  @Output() all = new EventEmitter<void>();
  @Output() active = new EventEmitter<void>();
  @Output() completed = new EventEmitter<void>();
  @Output() clearCompleted = new EventEmitter<void>();

  control = new FormControl('all');

  ngAfterViewInit(): void {
    this.control.valueChanges
      .pipe(takeUntil(this._destroy))
      .subscribe((value: FilterValue) => {
        this.emitChange(value);
      });
  }

  emitChange(value: FilterValue): void {
    switch (value) {
      case 'all':
        return this.all.emit();
      case 'active':
        return this.active.emit();
      case 'completed':
        return this.completed.emit();
    }
  }

  onClearCompleted() {
    this.clearCompleted.emit();
  }

  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();
  }
}
