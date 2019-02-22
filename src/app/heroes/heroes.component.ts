import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
//import { HEROES } from "./mock-heroes";
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  heroes: Hero[];

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // se agrega el parametro del servicio
  constructor(private heroService: HeroService) { }

  // obtener los datos de forma sincrona
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // Obtener datos de forma asincrona mediante el Observable del hero.service
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }
}
