import { Directive, forwardRef } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

export class CheckboxValidator {
  static checked(c: FormControl) {
    return new CheckboxCheckedValidator().validate(c);
  }
}

@Directive({
  // tslint:disable-next-line
  selector: '[ngModel][labsCheckboxCheckedValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CheckboxCheckedValidator), multi: true }
  ]
})
// tslint:disable-next-line
export class CheckboxCheckedValidator {
  constructor() {}

  validate(formControl: FormControl) {
    return formControl.value ? null : {
      validateCheckboxChecked: {
        valid: false
      }
    };
  }
}
