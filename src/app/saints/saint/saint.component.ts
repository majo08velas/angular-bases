import { Component } from '@angular/core';

@Component({
  selector: 'app-saint',
  templateUrl: './saint.component.html',
  styleUrls: ['./saint.component.css']
})
export class SaintComponent {
  public name: string = 'Gema Galgani';
  public age: number = 25;

  get capitalizeName():string{
    return "italia".toUpperCase();
  }

  /**If you declare it like private, it's not accesible outside the class */
  getSaintDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeSaint():void{
    this.name = 'María Goretti';
  }

  changeAge():void{
    this.age = 12;
  }
  reset():void{
    this.name = 'Gema Galgani'
    this.age = 25
  }
}
