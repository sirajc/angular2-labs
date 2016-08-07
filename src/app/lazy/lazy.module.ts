import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { LazyDumbComponent } from './lazy-dumb';
import { LAZY_ROUTES } from './lazy.routes';

@NgModule({
  imports: [ RouterModule.forChild(LAZY_ROUTES) ],
  declarations: [ LazyComponent, LazyDumbComponent ]
})
export class LazyModule {}
