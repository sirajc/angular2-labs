import { NgModule } from '@angular/core';

import { FormsComponent } from './forms.component';
import { moduleRoutes } from './forms.routes';

@NgModule({
  imports: [ moduleRoutes ],
  exports: [],
  declarations: [ FormsComponent ]
})
export class LabsFormModule {}
