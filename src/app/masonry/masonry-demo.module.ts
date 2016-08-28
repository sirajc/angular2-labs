import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { moduleRoutes, MODULE_COMPONENTS } from './masonry-demo.routes';
import { MasonryModule } from '../shared/masonry/masonry.module';

@NgModule({
  imports: [ CommonModule, moduleRoutes, MasonryModule ],
  declarations: [ ...MODULE_COMPONENTS ],
  exports: []
})
export class MasonryDemoModule {}
