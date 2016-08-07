import { Route } from '@angular/router';
import { VillainListComponent } from './villain-list';
import { VillainDetailComponent } from './villain-detail';

export const VILLAIN_ROUTES: Route[] = [
  { path: '', component: VillainListComponent },
  { path: ':id', component: VillainDetailComponent }
];
