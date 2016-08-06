import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HOME_ROUTES } from './home.routes'

@NgModule({
  // In all child modules, we have to use `RouterModule.forChild`, `RouterModule.forRoot` is only for root component
  // because forRoot provides all the router providers and directives, we need not do that again
  imports: [ RouterModule.forChild(HOME_ROUTES) ],
  declarations: [ HomeComponent ]
})
export class HomeModule {}
