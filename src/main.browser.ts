import { LabsApplicationModule } from './app';
import { browserDynamicPlatform } from '@angular/platform-browser-dynamic';

browserDynamicPlatform().bootstrapModule(LabsApplicationModule)
  .catch((error) => console.log("Error bootstrapping App", error));
