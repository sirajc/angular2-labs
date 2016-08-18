import { Route, RouterModule } from '@angular/router';
import { ModelBuilderComponent } from './model-builder.component';

const ROUTES: Route[] = [
  { path: 'model-form-builder', component: ModelBuilderComponent }
];

export const moduleRoutes = RouterModule.forChild(ROUTES);
