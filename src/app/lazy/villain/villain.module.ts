import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VillainListComponent } from './villain-list';
import { VillainDetailComponent } from './villain-detail';
import { VILLAIN_ROUTES } from './villain.routes';

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(VILLAIN_ROUTES) ],
  declarations: [ VillainListComponent, VillainDetailComponent ]
})
export class VillainModule {}
