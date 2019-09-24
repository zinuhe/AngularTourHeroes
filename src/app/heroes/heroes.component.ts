import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;

  constructor() { }

  // On Select method
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}
