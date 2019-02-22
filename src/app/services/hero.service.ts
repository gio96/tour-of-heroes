import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../heroes/hero';
import { HEROES } from '../heroes/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // peticion sincrona
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // Observable es para que sea asincrono ya que peticiones http de angular retorna un RxJS.
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  constructor(private messageService: MessageService) { }
}
