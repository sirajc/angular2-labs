import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterConfig, RouterModule } from '@angular/router';
import { DygraphModule } from './dygraph';
import { DygraphsComponent } from './dygraphs.component.ts';
import { DataService } from './shared/data.service';

const ROUTES: RouterConfig = [
  { path: 'dygraph', component: DygraphsComponent }
];

@NgModule({
  imports: [ HttpModule, DygraphModule, RouterModule.forChild(ROUTES) ],
  declarations: [ DygraphsComponent ],
  providers: [ DataService ]
})
export class DygraphsModule {}
