import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

const components = [ AppComponent ];

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
    appRef.bootstrap(AppComponent);
  }
}