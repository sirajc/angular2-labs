import { Route } from '@angular/router';
import { loadModule } from './shared';
import { AboutComponent } from './about';

export const APP_ROUTES: Route[] = [
  {
    path: 'lazy',
    loadChildren: loadModule(() => new Promise(resolve => {
      (require as any).ensure([], require => {
        resolve(require('./lazy/lazy.module').LazyModule);
      });
    }))
  },
  { path: 'about', component: AboutComponent }
];
