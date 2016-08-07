import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'labs-villain-detail',
  templateUrl: 'villain-detail.component.html',
  styles: [`
    a , a :visited {
      color: inherit;
      text-decoration: none;
      background-color: lightblue;
      padding: 0.5rem 1rem;
      border-radius: 3px;
    }
    a:hover {
      background-color: lightskyblue;
    }
  `]
})
export class VillainDetailComponent implements OnInit {

  villain: any = {};

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    let villainId = +this.activatedRoute.snapshot.params['id'];
    this.villain = (VILLAINS_DETAILS.filter(villain => villain.id === villainId))[0];
  }

}

const VILLAINS_DETAILS = [
  { id: 100, name: 'Loki Laufeyson', movies: ['Avengers', 'Thor', 'Avengers: Age of Ultron', 'Thor: The Dark World'] },
  { id: 102, name: 'Thanos', movies: ['Guardians of the Galaxy', 'Avengers: Age of Ultron'] },
  { id: 103, name: 'Ultron', movies: ['Avengers: Age of Ultron'] },
  { id: 105, name: 'Ronan', movies: ['Guardians of the Galaxy'] },
  { id: 176, name: 'Green Goblin (Norman Osborn)', movies: ['SpiderMan'] },
  { id: 234, name: 'Red Skull (Johann Shmidt)', movies: ['Captain America: The First Avenger'] },
  { id: 431, name: 'Agent William Stryker', movies: ['X-Men Origins: Wolverine', 'X2', 'X-Men: Days of Future Past'] }
]
