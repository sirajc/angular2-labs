import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { LAZY_ROUTES } from './lazy.routes';

@NgModule({
  imports: [ RouterModule.forChild(LAZY_ROUTES) ],
  declarations: [ LazyComponent ]
})
export class LazyModule {}
