import { NgModule } from '@angular/core';
import { ModelBuilderComponent } from './model-builder.component.ts';

import { moduleRoutes } from './model-builder.routes.ts';

@NgModule({
  imports: [ moduleRoutes ],
  declarations: [ ModelBuilderComponent ]
})
export class ModelBuilderModule {}
