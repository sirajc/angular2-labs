import { Route } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { LazyDumbComponent } from './lazy-dumb';
import { loadModule } from '../shared';

export const LAZY_ROUTES: Route[] = [
  { path: '', component: LazyComponent,
    children:
      [ { path: '', component: LazyDumbComponent },
        {
          path: 'villain',
          loadChildren: loadModule(() => new Promise(resolve => {
            (require as any).ensure([], require => {
              resolve(require('./villain/villain.module').VillainModule);
            });
          }))
        }
      ]
  }
]
