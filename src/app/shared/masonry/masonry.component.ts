import { Renderer, ElementRef, Input, ViewEncapsulation, Component, AfterViewInit } from '@angular/core';
declare var Masonry: any;

@Component({
  selector: 'labs-masonry',
  styleUrls: [ 'masonry.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="labs-masonry-grid">
      <ng-content></ng-content>
    </div>
  `
})
export class MasonryComponent implements AfterViewInit {

  @Input() options: any = {};

  constructor(private elemRef: ElementRef, private renderer: Renderer) {}

  ngAfterViewInit() {
    new Masonry( '.labs-masonry-grid', this.options );
  }

}
