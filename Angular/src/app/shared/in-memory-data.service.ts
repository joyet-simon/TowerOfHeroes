import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: "Cloud Strife" },
      { id: 2, name: "Aeris Gainsborough" },
      { id: 3, name: "Tifa Lockhart" },
      { id: 4, name: "Barret Wallace" },
      { id: 5, name: "Nanaki" },
      { id: 6, name: "Cid Highwind" },
      { id: 7, name: "Cait Sith" },
      { id: 8, name: "Vincent Valentine" },
      { id: 9, name: "Yuffie Kisaragi" },
      { id: 10, name: "Wedge" },
      { id: 11, name: "Biggs" },
      { id: 12, name: "Jessie" },
  ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
