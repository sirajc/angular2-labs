import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModelBuilderComponent } from './model-builder.component';
import { Bootstrap4FormsModule } from '../../shared/bootstrap4/forms/bootstrap4-forms.module';

import { moduleRoutes } from './model-builder.routes';

@NgModule({
  imports: [ Bootstrap4FormsModule, CommonModule, ReactiveFormsModule, moduleRoutes ],
  declarations: [ ModelBuilderComponent ]
})
export class ModelBuilderModule {}
