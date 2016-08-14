import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'labs-dygraphs',
  templateUrl: 'dygraphs.component.html'
})
export class DygraphsComponent implements OnInit {

  rollup: number = 7;
  data: DygraphPoint[];

  options: DygraphOptions = {
    labels: [ 'Dates', 'Series1', 'Series2' ],
    title: 'Some Trend',
    ylabel: 'Variation',
    xlabel: 'Time',
    legend: 'always',
    rollPeriod: 7
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData('init')
          .subscribe(data => {
            this.options = {
              labels: ['Date', 'Series1', 'Series2'],
              file: data
            };
          });
  }

  removeSeries() {
    this.dataService.getData('remove')
      .subscribe(data => {
            this.options = {
              labels: ['Date', 'Series1', 'Series2', 'Series3'],
              file: data
            };
          });
  }

  addSeries() {
    this.dataService.getData('add')
      .subscribe(data => {
            this.options = {
              labels: ['Date', 'Series1', 'Series2', 'Series3', 'Series4'],
              file: data
            };
          });
  }

  initialData() {
    this.rollup = 7;
    this.dataService.getData('init')
      .subscribe(data => {
            this.options = {
              labels: ['Date', 'Series1', 'Series2'],
              file: data,
              rollPeriod: this.rollup
            };
          });
  }

  increment() {
    this.rollup = this.rollup + 2;
    this.options = {
      rollPeriod: this.rollup
    };
  }

  decrement() {
    if (this.rollup > 2) {
      this.rollup = this.rollup - 2;
      this.options = {
        rollPeriod: this.rollup
      };
    }
  }

}
