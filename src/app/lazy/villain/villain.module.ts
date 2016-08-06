import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VillainListComponent } from './villain-list';
import { VILLAIN_ROUTES } from './villain.routes';

@NgModule({
  imports: [ RouterModule.forChild(VILLAIN_ROUTES) ],
  declarations: [ VillainListComponent ]
})
export class VillainModule {}
