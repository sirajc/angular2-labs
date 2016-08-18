import { Route, RouterModule } from '@angular/router';
import { TemplateComponent } from './template.component';

const ROUTES: Route[] = [
  {
    path: '',
    children: [
      { path: 'template', component: TemplateComponent }
    ]
  }
];

export const moduleRoutes = RouterModule.forChild(ROUTES);
