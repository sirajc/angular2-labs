import { NgModule, ApplicationRef } from '@angular/core';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';

const components = [ HomeComponent ]

@NgModule(
  {
    declarations: components,
    imports: [ BrowserModule ],
    entryComponents: components,
    bootstrap: components
  }
)
export class HomeModule {
  constructor(appRef: ApplicationRef) {
    appRef.bootstrap(HomeComponent);
  }
}