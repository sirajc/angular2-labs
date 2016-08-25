import { Component } from '@angular/core';
import { MasonryOptions } from './../../shared/masonry/masonry-options';

@Component({
  selector: 'labs-masonry-demo-ngfor',
  templateUrl: 'masonry-demo-ngfor.component.html',
  styleUrls: ['masonry-demo-ngfor.component.scss']
})
export class MasonryDemoNgForComponent {

  masonryOptions: MasonryOptions = {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    percentPosition: true
  };

  _number = 1;

  items: [any] = [
    3, 1, 2, 2, 3, 1, 2, 3, 1, , 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3
  ];
}
