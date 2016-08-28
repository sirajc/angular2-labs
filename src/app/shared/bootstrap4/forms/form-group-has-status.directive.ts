import { Directive, HostBinding, ContentChild, AfterViewInit } from '@angular/core';
import { AbstractControl, NgModel, FormControlName } from '@angular/forms';

// tslint:disable-next-line
@Directive({selector: 'div.form-group,fieldset.form-group'})
export class FormGroupHasStatusDirective implements AfterViewInit {

  @ContentChild(NgModel) input: NgModel;
  @ContentChild(FormControlName) formControl: FormControlName;
  private control: AbstractControl;

  constructor() {}

  ngAfterViewInit() {
    if (this.input) {
      this.control = this.input.control;
    } else if (this.formControl) {
      this.control = this.formControl.control;
    }
  }

  @HostBinding('class.has-success') get valid() {
    return !this.control ? false : this.control.dirty && this.control.valid;
   }
  @HostBinding('class.has-danger') get invalid() {
    return !this.control ? false : this.control.touched && this.control.invalid;
  }
}
