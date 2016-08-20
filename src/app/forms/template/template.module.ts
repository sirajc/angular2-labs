import { NgModule } from '@angular/core';
import { TemplateComponent } from './template.component.ts';

import { moduleRoutes } from './template.routes.ts';

@NgModule({
  imports: [ moduleRoutes ],
  declarations: [ TemplateComponent ]
})
export class TemplateModule {}
