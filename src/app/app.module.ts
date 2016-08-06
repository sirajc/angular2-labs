import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModule } from './home';
import { AdminModule } from './admin';

@NgModule(
  {
    // `RouterModule.forRoot([])` is there to provide Router providers and directives to our application
    // additionaly we can use this configure app level routes if any, as of now we have []
    imports: [ BrowserModule, RouterModule.forRoot([]), HomeModule, AdminModule ],

    // We need to declare components which are part of (created for) this module
    declarations: [ AppComponent ],

    // Components that we need to bootstrap when the module is loaded
    bootstrap: [ AppComponent ]
  }
)
export class LabsApplicationModule {
  // This is another way to Bootstrap modules
  // Either use this hook or provide component in `@NgModule.bootstrap` as above
  /* ngDoBootstrap(applicationRef: ApplicationRef) {
     applicationRef.bootstrap(AppComponent);
   }
   */
}
