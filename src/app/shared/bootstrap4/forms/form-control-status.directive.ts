import { AfterViewInit, Directive, HostBinding, ContentChild } from '@angular/core';
import { NgModel, AbstractControl, FormControlName } from '@angular/forms';

// tslint:disable-next-line
@Directive({selector: '[ngModel],[formControlName]'})
export class FormControlStatusDirective implements AfterViewInit {

  @ContentChild(NgModel) private input: NgModel;
  @ContentChild(FormControlName) private formControl: FormControlName;
  private control: AbstractControl;

  constructor() {}

  ngAfterViewInit() {
    if (this.input) {
      this.control = this.input.control;
    } else if (this.formControl) {
      this.control = this.formControl.control;
    }
  }

  @HostBinding('class.form-control-success') get valid() {
    return !this.control ? false : this.control.dirty && this.control.valid;
  }

  @HostBinding('class.form-control-danger') get invalid() {
    return !this.control ? false : this.control.touched && this.control.invalid;
  }
}
