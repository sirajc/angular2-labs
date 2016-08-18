import { RouterModule, Route } from '@angular/router';
import { FormsComponent } from './forms.component';
import { TemplateComponent } from './template/template.component';
import { ModelControlsComponent } from './model-controls/model-controls.component';
import { ModelBuilderComponent } from './model-builder/model-builder.component';

const ROUTES: Route[] = [
  { path: '', component: FormsComponent,
    children: [
      { path: '', pathMatch: 'full' },
      { path: 'template', component: TemplateComponent },
      { path: 'model-form-controls', component: ModelControlsComponent },
      { path: 'model-form-builder', component: ModelBuilderComponent }
    ]
  }
];

export const moduleRoutes = RouterModule.forChild(ROUTES);
