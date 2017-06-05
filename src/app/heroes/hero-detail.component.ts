import {Component, Input, OnInit} from '@angular/core';
import { Hero } from './hero';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HeroService} from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  template: `
      <div *ngIf="hero">
          <h2>{{hero.name}} details!</h2>
          <div>
              <label>id: </label>{{hero.id}}
          </div>
          <div>
              <label>name: </label>
              <input [(ngModel)]="hero.name" placeholder="name"/>
          </div>
      </div>
      <button (click)="goToHeroes()">Go Back to Heroes</button>
  `
})
export class HeroDetailComponent implements OnInit {

  public hero: Hero;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: HeroService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .switchMap((params: Params) => this.service.getHero(+params['id']))
      .subscribe((hero: Hero) => this.hero = hero);
  }

  goToHeroes() {
    const heroId = this.hero ? this.hero.id : null;
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }
}
