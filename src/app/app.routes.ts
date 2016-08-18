import { Route } from '@angular/router';
import { AboutComponent } from './about';

export const APP_ROUTES: Route[] = [
  {
    path: 'lazy',
    loadChildren: () => new Promise( resolve => {
      (require as any).ensure([], require => {
        resolve(require('./lazy/lazy.module').LazyModule);
      });
    })
  },
  {
    path: 'forms',
    loadChildren: () => new Promise( resolve => {
      (require as any).ensure([], require => {
        resolve(require('./forms/forms.module').LabsFormModule);
      });
    })
  },
  { path: 'about', component: AboutComponent }
];
