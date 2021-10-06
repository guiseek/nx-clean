import {
  Self,
  Input,
  Output,
  Optional,
  Renderer2,
  Component,
  OnDestroy,
  ElementRef,
  HostBinding,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import {
  NgControl,
  FormControl,
  ControlValueAccessor,
  CheckboxControlValueAccessor,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'todo-checkbox',
  template: `
    <mat-checkbox [formControl]="control" [checked]="checked === true ?? false">
      <ng-content></ng-content>
    </mat-checkbox>
  `,
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent
  extends CheckboxControlValueAccessor
  implements ControlValueAccessor, AfterViewInit, OnDestroy
{
  private _destroy = new Subject<void>();

  private _checked: boolean | undefined = false;

  public get checked() {
    return this._checked;
  }

  @Input()
  public set checked(value) {
    this._checked = value;
    this.control.setValue(value);
  }

  @Output()
  stateChange = new EventEmitter<boolean>();

  get control() {
    return this.ngControl.control as FormControl;
  }

  @HostBinding('class')
  class = 'out-checkbox';

  constructor(
    renderer2: Renderer2,
    public elementRef: ElementRef<HTMLElement>,
    @Optional() @Self() public ngControl: NgControl
  ) {
    super(renderer2, elementRef);
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngAfterViewInit(): void {
    if (this.ngControl.valueChanges) {
      this.ngControl.valueChanges
        .pipe(takeUntil(this._destroy))
        .subscribe((checked) => {
          this.stateChange.emit(checked);
        });
    }
  }

  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();
  }
}
