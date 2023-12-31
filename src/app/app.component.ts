import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter:number = 10;

  increase():void{
    this.counter += 1;
  }

  decrease():void{
    this.counter -= 1;
  }

  reset():void{
    this.counter = 10;
  }
}
