import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>{{counter}}</h1>
  <button (click)="increase()">+1</button>
  <button (click)="decrease()">-1</button>
  <button (click)="reset()">reset</button>
  `
})

export class CounterComponent {

  counter:number = 10;

  constructor() { }

  increase(){
    this.counter += 1;
  }

  decrease(){
    this.counter -= 1;
  }

  reset(){
    this.counter = 10;
  }
}
