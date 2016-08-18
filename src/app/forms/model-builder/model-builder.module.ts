import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ModelBuilderComponent } from './model-builder.component.ts';

import { moduleRoutes } from './model-builder.routes.ts';

@NgModule({
  imports: [ ReactiveFormsModule, moduleRoutes ],
  declarations: [ ModelBuilderComponent ]
})
export class ModelBuilderModule {}
