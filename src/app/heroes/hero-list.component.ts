import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  template: `
      <h2>Heroes</h2>
      <ul class="heroes">
          <li *ngFor="let hero of heroes"
              [class.selected]="isSelected(hero)"
              (click)="onSelect(hero)">
              <span class="badge">{{hero.id}}</span> {{hero.name}}
          </li>
      </ul>
      
      <button routerLink="/sidekicks">Go to sidekicks</button>
  `,
  styles: [`
      .selected {
          background-color: #CFD8DC !important;
          color: white;
      }
      .heroes {
          margin: 0 0 2em 0;
          list-style-type: none;
          padding: 0;
          width: 15em;
      }
      .heroes li {
          cursor: pointer;
          position: relative;
          left: 0;
          background-color: #EEE;
          margin: .5em;
          padding: .3em 0;
          height: 1.6em;
          border-radius: 4px;
      }
      .heroes li.selected:hover {
          background-color: #BBD8DC !important;
          color: white;
      }
      .heroes li:hover {
          color: #607D8B;
          background-color: #DDD;
          left: .1em;
      }
      .heroes .text {
          position: relative;
          top: -3px;
      }
      .heroes .badge {
          display: inline-block;
          font-size: small;
          color: white;
          padding: 0.8em 0.7em 0 0.7em;
          background-color: #607D8B;
          line-height: 1em;
          position: relative;
          left: -1px;
          top: -4px;
          height: 1.8em;
          margin-right: .8em;
          border-radius: 4px 0 0 4px;
      }
  `],
  providers: [HeroService]
})
export class HeroListComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  selectedId: number;

  constructor(
    private heroService: HeroService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.activatedRoute.params
                       .switchMap((params: Params) => {
                         this.selectedId = +params['id'];
                         return this.heroService.getHeroes();
                       })
                      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.router.navigate(['/heroes', hero.id]);
  }

  isSelected(hero: Hero): boolean {
    return hero.id === this.selectedId;
  }
}
