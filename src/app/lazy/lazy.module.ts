import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LazyAComponent } from './lazy-a.component';
import { LAZY_ROUTES } from './lazy.routes';

@NgModule({
  imports: [ RouterModule.forChild(LAZY_ROUTES) ],
  declarations: [ LazyAComponent ]
})
export class LazyModule {}
