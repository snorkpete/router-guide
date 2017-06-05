import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroListComponent} from './hero-list.component';
import {HeroDetailComponent} from './hero-detail.component';

const heroRoutes: Routes = [
  { path: 'heroes', component: HeroListComponent },
  { path: 'heroes/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(heroRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
