import { RouterModule, Route } from '@angular/router';
import { FormsComponent } from './forms.component';

const ROUTES: Route[] = [
  { path: '', component: FormsComponent }
];

export const moduleRoutes = RouterModule.forChild(ROUTES);
