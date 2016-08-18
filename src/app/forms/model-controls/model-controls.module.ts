import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModelControlsComponent } from './model-controls.component.ts';

// import { moduleRoutes } from './model-controls.routes.ts';

@NgModule({
  imports: [ FormsModule ],
  declarations: [ ModelControlsComponent ],
  exports: [ ModelControlsComponent ]
})
export class ModelControlsModule {}
