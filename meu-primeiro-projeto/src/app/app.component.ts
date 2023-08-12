import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-new-component></app-new-component>
  <app-diretivas-atributos></app-diretivas-atributos>
  <app-input></app-input>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}

