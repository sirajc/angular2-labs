import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { validateEmailFactory } from '../../shared/validators/email.validator';
import { CheckboxValidator } from '../../shared/validators/checkbox-checked.validator';

@Component({
  selector: 'labs-model-controls',
  templateUrl: 'model-controls.component.html'
})
export class ModelControlsComponent {
  form: FormGroup;

  constructor() {

    this.form = new FormGroup({
      email: new FormControl(null, validateEmailFactory()),
      firstName: new FormControl(),
      lastName: new FormControl(),
      gender: new FormControl(),
      notrobot: new FormControl(null, CheckboxValidator.checked),
      address: new FormGroup({
        addressLine1: new FormControl(),
        addressLine2: new FormControl(),
        city: new FormControl(),
        zipCode: new FormControl(),
        landmark: new FormControl(),
        addressType: new FormControl(),
        country: new FormControl()
      })
    });
  }

  signUp(data: any) {
    console.log('Submit the data: ', data);
  }
}
