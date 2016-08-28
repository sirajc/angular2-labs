import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { validateEmailFactory } from '../../shared/validators/email.validator';
import { CheckboxValidator } from '../../shared/validators/checkbox-checked.validator';

@Component({
  selector: 'labs-model-builder',
  templateUrl: 'model-builder.component.html'
})
export class ModelBuilderComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      email: [null, validateEmailFactory()],
      firstName: null,
      lastName: null,
      gender: null,
      notrobot: [null, CheckboxValidator.checked],
      address: this.formBuilder.group({
        addressLine1: null,
        addressLine2: null,
        city: null,
        zipCode: null,
        landmark: null,
        addressType: null,
        country: null
      })
    });
  }

  signUp(data: any) {
    console.log('Submit the data: ', data);
  }
}
