import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AdminHomeComponent } from './admin-home.component';
import { ADMIN_ROUTES } from './admin.routes';

@NgModule({
  imports: [ RouterModule.forChild(ADMIN_ROUTES) ],
  declarations: [ AdminHomeComponent ]
})
export class AdminModule {}
