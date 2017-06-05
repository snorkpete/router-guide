import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  styleUrls: ['./hero-list.component.css'],
  template: `
    <h2>Heroes</h2>
    <p>Get your heroes here</p>
    
    <button routerLink="/sidekicks">Go to Side Kicks</button>
  `,
})
export class HeroListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
