import { Directive, HostBinding } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';

// tslint:disable-next-line
@Directive({selector: '[ngModel]'})
export class FormControlStatusDirective {

  private control: FormControl;

  constructor(ngModel: NgModel) {
    this.control = ngModel.control;
  }

  @HostBinding('class.form-control-success') get valid() {
    return this.control.dirty && this.control.valid;
  }

  @HostBinding('class.form-control-danger') get invalid() {
    return this.control.touched && this.control.invalid;
  }
}
