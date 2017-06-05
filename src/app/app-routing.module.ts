import { NgModule } from '@angular/core';
import {PageNotFoundComponent} from './page-not-found.component';
import {HeroListComponent} from './hero-list.component';
import {RouterModule, Routes} from '@angular/router';
import {CrisisListComponent} from './crisis-list.component';

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent },
  { path: '', redirectTo: '/crisis-center', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
