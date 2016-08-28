import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelControlsComponent } from './model-controls.component.ts';
import { Bootstrap4FormsModule } from '../../shared/bootstrap4/forms';

import { moduleRoutes } from './model-controls.routes.ts';

@NgModule({
  imports: [ Bootstrap4FormsModule, CommonModule, FormsModule, ReactiveFormsModule, moduleRoutes ],
  declarations: [ ModelControlsComponent ]
})
export class ModelControlsModule {}
