import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'todo-header',
  templateUrl: './todo-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`:host header { display: flex; flex-direction: column; }`],
})
export class TodoHeaderComponent implements AfterViewInit {
  @ViewChild('todoInput')
  todoInputRef!: ElementRef<HTMLInputElement>
  todoInputEl!: HTMLInputElement

  checkbox = new FormControl();

  name = new FormControl('', []);

  @Output() addItem = new EventEmitter<string>();
  @Output() toggleAllCompleted = new EventEmitter();
  @Output() toggleAllActive = new EventEmitter();

  constructor(private _focus: FocusMonitor, private _cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.todoInputEl = this.todoInputRef.nativeElement;
    queueMicrotask(() => {
      this._focus.focusVia(this.todoInputEl, 'program');
      this._cdr.markForCheck();
    })
  }

  onAddItem({ value }: FormControl) {
    this.addItem.next(value);
    this.name.reset();
  }

  onToggleAllChange() {
    if (this.checkbox.value) {
      this.toggleAllCompleted.emit();
    } else {
      this.toggleAllActive.emit();
    }
  }
}
