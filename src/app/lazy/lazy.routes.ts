import { Route } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { LazyDumbComponent } from './lazy-dumb';

export const LAZY_ROUTES: Route[] = [
  { path: '', component: LazyComponent,
    children:
      [ { path: '', component: LazyDumbComponent },
        {
          path: 'villain',
          loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], require => {
              resolve(require('./villain/villain.module').VillainModule);
            });
          })
        }
      ]
  }
];
