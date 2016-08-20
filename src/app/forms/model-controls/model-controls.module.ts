import { NgModule } from '@angular/core';
import { ModelControlsComponent } from './model-controls.component.ts';

import { moduleRoutes } from './model-controls.routes.ts';

@NgModule({
  imports: [ moduleRoutes ],
  declarations: [ ModelControlsComponent ]
})
export class ModelControlsModule {}
