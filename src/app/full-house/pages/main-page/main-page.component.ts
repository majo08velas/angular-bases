import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { FhService } from '../../services/fh.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private fhService:FhService){}

  get characters(): Character[]{
    return [...this.fhService.characterListFromParent];
  }

  onDeleteCharacter(id:string): void{
    this.fhService.whenChildEmitCharacterToDelete(id);
  }

  onNewCharacter(character:Character): void{
    this.fhService.whenChildEmitNewCharacter(character);
  }
}
