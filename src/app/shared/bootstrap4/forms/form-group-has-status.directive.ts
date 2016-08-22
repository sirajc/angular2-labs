import { Directive, HostBinding, ContentChild, AfterViewInit } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';

// tslint:disable-next-line
@Directive({selector: 'div.form-group,fieldset.form-group'})
export class FormGroupHasStatusDirective implements AfterViewInit {

  @ContentChild(NgModel) input: NgModel;
  private control: FormControl;

  constructor() {}

  ngAfterViewInit() {
    this.control = this.input && this.input.control;
  }

  @HostBinding('class.has-success') get valid() {
    return !this.control ? false : this.control.dirty && this.control.valid;
   }
  @HostBinding('class.has-danger') get invalid() {
    return !this.control ? false : this.control.touched && this.control.invalid;
  }
}
