import { Component } from '@angular/core';

@Component({
  selector: 'labs-home',
  templateUrl: 'home.component.html',
  styles: [`
    a {
      background-color: #daa520;
      padding: 0.5rem 1rem;
      text-decoration: none;
      border-radius: 5px;
      transition: all 0.2s ease;
    }
    a:visited {
      color: inherited;
    }
    a:hover {
      background-color: #f08080;
    }
  `]
})
export class HomeComponent {}
