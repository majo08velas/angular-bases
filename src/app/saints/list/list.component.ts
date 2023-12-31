import { Component } from '@angular/core';

@Component({
  selector: 'app-saint-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public saintNames: string[] = ['Santa Gema Galgani','Santa Filomena','Santa Maria Goretti'];
  removedSaint:string = '';

  removeLastSaint():void{
    this.removedSaint = this.saintNames.pop()!;
  }
}
