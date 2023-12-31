import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class FhService {

  characterListFromParent : Character[] = [
    {
      id: uuid(),
      name: 'Michelle Tanner',
      role: 'Danny´s daughter'
    },
    {
      id: uuid(),
      name: 'Stephanie Tanner',
      role: 'Danny´s daughter'
    },
  ]

  whenChildEmitNewCharacter(character: Character):void{
    this.characterListFromParent.push(character)
  }

  whenChildEmitCharacterToDelete(id:string):void{
    this.characterListFromParent = this.characterListFromParent.filter( character => character.id !== id)
  }
}
