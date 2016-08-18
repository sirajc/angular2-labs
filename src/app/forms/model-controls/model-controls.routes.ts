import { Route, RouterModule } from '@angular/router';
import { ModelControlsComponent } from './model-controls.component';

const ROUTES: Route[] = [
  { path: 'model-form-controls', component: ModelControlsComponent }
];

export const moduleRoutes = RouterModule.forChild(ROUTES);
