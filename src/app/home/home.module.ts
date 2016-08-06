import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { HomeComponent } from './home.component';

const ROUTES: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: '', pathMatch: 'full'}
]

@NgModule(
  {
    // In all child modules, we have to use `RouterModule.forChild`, `RouterModule.forRoot` is only for root component
    // because forRoot provides all the router providers and directives, we need not do that again
    imports: [ RouterModule.forChild(ROUTES) ],
    declarations: [ HomeComponent ]
  }
)
export class HomeModule {}
