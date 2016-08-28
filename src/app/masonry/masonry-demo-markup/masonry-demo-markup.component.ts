import { Component } from '@angular/core';
import { MasonryOptions } from '../../shared/masonry/masonry-options';

@Component({
  selector: 'labs-masonry-demo-markup',
  templateUrl: 'masonry-demo-markup.component.html',
  styleUrls: ['masonry-demo-markup.component.scss']
})
export class MasonryDemoMarkupComponent {

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
