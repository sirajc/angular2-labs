import { NgModule } from '@angular/core';
import { CheckboxCheckedValidator } from './checkbox-checked.validator';
import { EmailValidator } from './email.validator';

@NgModule({
  imports: [],
  declarations: [ CheckboxCheckedValidator, EmailValidator ],
  exports: [ CheckboxCheckedValidator, EmailValidator]
})
export class ValidatorsModule {}
