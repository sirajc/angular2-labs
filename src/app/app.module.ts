import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';

const components = [ App ];

@NgModule(
  {
    declarations: components,
    imports: [ BrowserModule ],
    entryComponents: components,
    bootstrap: components
  }
)
export class LabsApplicationModule {
  constructor(appRef: ApplicationRef) {
    appRef.bootstrap(App);
  }
}