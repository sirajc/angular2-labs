import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ModelBuilderComponent } from './model-builder.component.ts';

import { moduleRoutes } from './model-builder.routes.ts';

@NgModule({
  imports: [ moduleRoutes, ReactiveFormsModule ],
  declarations: [ ModelBuilderComponent ]
})
export class ModelBuilderModule {}
