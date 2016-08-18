import { NgModule } from '@angular/core';

import { TemplateModule } from './template';
import { ModelControlsModule } from './model-controls';
import { ModelBuilderModule } from './model-builder';
import { FormsComponent } from './forms.component';
import { moduleRoutes } from './forms.routes';

@NgModule({
  imports: [ moduleRoutes, TemplateModule, ModelControlsModule, ModelBuilderModule ],
  exports: [],
  declarations: [ FormsComponent ]
})
export class LabsFormModule {}
