import { Component, ElementRef, Input, OnInit, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input', { static: true }) input!: ElementRef;

  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() label = '';

  spinner = faSpinner;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    const control = this.controlDir.control;
    const validators = control?.validator ? [control.validator] : [];
    const asyncValidators = control?.asyncValidator ? [control.asyncValidator] : [];

    control?.setValidators(validators);
    control?.setAsyncValidators(asyncValidators);
    control?.updateValueAndValidity();
  }

  onChange(event: any) {}
  onTouch() {}

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  hasSyncErrors() {
    return (
      this.controlDir.control?.invalid &&
      this.controlDir.control?.touched &&
      this.controlDir.control?.errors
    );
  }
  get syncErrorMessage() {
    if (this.controlDir.control?.errors?.required) {
      return `${this.label} is required`;
    }
    if (this.controlDir.control?.errors?.pattern) {
      return `${this.label} is invalid`;
    }
    return '';
  }

  get asyncValidationInProgress() {
    return this.controlDir.control?.status === 'PENDING';
  }

  hasAsyncErrors() {
    return (
      this.controlDir.control?.invalid &&
      this.controlDir.control?.dirty &&
      this.controlDir.control.asyncValidator &&
      this.controlDir.control?.errors
    );
  }

  get asyncErrorMessage() {
    if (this.controlDir.control?.errors?.emailExists) {
      return `Email ${this.input.nativeElement.value} is already in use`;
    }
    return '';
  }
}
