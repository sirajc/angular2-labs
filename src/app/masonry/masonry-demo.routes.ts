import { Route, RouterModule } from '@angular/router';
import { MasonryDemoComponent } from './masonry-demo.component';
import { MasonryDemoNgForComponent } from './masonry-demo-ngfor';
import { MasonryDemoMarkupComponent } from './masonry-demo-markup';

const ROUTES: Route[] = [
  { path: 'masonry',
    component: MasonryDemoComponent,
    children: [
      { path: '', redirectTo: 'markup' },
      { path: 'markup', component: MasonryDemoMarkupComponent },
      { path: 'ngfor', component: MasonryDemoNgForComponent }
    ]
 }
];

export const moduleRoutes = RouterModule.forChild(ROUTES);

export const MODULE_COMPONENTS = [ MasonryDemoComponent,
              MasonryDemoMarkupComponent,
              MasonryDemoNgForComponent ];

