import { Route } from '@angular/router';
import { loadModule } from './shared';

export const APP_ROUTES: Route[] = [
  {
    path: 'lazy',
    loadChildren: loadModule(() => new Promise(resolve => {
      (require as any).ensure([], require => {
        resolve(require('./lazy/lazy.module').LazyModule);
      });
    }))
  }
]
