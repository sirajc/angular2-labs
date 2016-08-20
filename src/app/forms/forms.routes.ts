import { RouterModule, Route } from '@angular/router';
import { FormsComponent } from './forms.component';
import { TemplateModule } from './template';
import { ModelControlsModule } from './model-controls';
import { ModelBuilderModule } from './model-builder';

const ROUTES: Route[] = [
  { path: '', component: FormsComponent,
    children: [
      { path: '', pathMatch: 'full' },
      { path: 'template', loadChildren: () => TemplateModule },
      { path: 'model-form-controls', loadChildren: () => ModelControlsModule },
      { path: 'model-form-builder', loadChildren: () => ModelBuilderModule }
    ]
  }
];

export const moduleRoutes = RouterModule.forChild(ROUTES);
