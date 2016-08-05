import { LabsApplicationModule } from './app/app.module';
import { browserDynamicPlatform } from '@angular/platform-browser-dynamic';

browserDynamicPlatform().bootstrapModule(LabsApplicationModule);