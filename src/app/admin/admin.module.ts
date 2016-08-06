import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AdminHomeComponent } from './admin-home.component';

const ROUTES: Route[] = [
  { path: 'admin', component: AdminHomeComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  declarations: [ AdminHomeComponent ]
})
export class AdminModule {}
