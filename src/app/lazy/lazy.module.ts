import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LazyAComponent } from './lazy-a.component';

const ROUTES: Route[] = [
  { path: 'lazy', component: LazyAComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  declarations: [ LazyAComponent ]
})
export class LazyModule {}
