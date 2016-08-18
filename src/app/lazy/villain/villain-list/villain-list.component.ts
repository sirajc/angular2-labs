import { Component, OnInit } from '@angular/core';

const VILLAINS = [
  { id: 100, name: 'Loki' },
  { id: 102, name: 'Thanos' },
  { id: 103, name: 'Ultron' },
  { id: 105, name: 'Ronan' },
  { id: 176, name: 'Green Goblin' },
  { id: 234, name: 'Red Skull' },
  { id: 431, name: 'Agent Stryker' }
];

@Component({
  selector: 'labs-villain-list',
  templateUrl: 'villain-list.component.html',
  styleUrls: [ 'villain-list.component.scss' ]
})
export class VillainListComponent implements OnInit {
  villains: Array<any> = [];

  ngOnInit() {
    this.villains = VILLAINS;
  }
}

