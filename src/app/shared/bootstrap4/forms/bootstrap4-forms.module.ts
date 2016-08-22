import { NgModule } from '@angular/core';
import { FormControlStatusDirective } from './form-control-status.directive';
import { FormGroupHasStatusDirective } from './form-group-has-status.directive';

@NgModule({
  imports: [ ],
  declarations: [ FormControlStatusDirective, FormGroupHasStatusDirective ],
  exports: [ FormControlStatusDirective, FormGroupHasStatusDirective ]
})
export class Bootstrap4FormsModule {}
