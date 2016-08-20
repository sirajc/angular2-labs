import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TemplateComponent } from './template.component.ts';

import { moduleRoutes } from './template.routes.ts';

@NgModule({
  imports: [ FormsModule, moduleRoutes ],
  declarations: [ TemplateComponent ]
})
export class TemplateModule {}
