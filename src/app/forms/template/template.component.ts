import { Component } from '@angular/core';

@Component({
  selector: 'labs-template',
  templateUrl: 'template.component.html'
})
export class TemplateComponent {
  signUp(data: any) {
    console.log('Submit the data: ', data);
  }
}
