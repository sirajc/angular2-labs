import { LabsApplicationModule } from './app';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(LabsApplicationModule);
  // .catch((error) => console.log('Error bootstrapping App', error));
