import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid} from 'uuid';

@Component({
  selector: 'fh-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  showError:boolean = false;
  character: Character = {
    id: uuid(),
    name: 'Abc',
    role: ''
  }

  emitCharacter():void{
    (this.character.name.length === 0 || this.character.role.length === 0) ? this.showError = true: this.onNewCharacter.emit(this.character);
    // this.character.name = '';
    // this.character.role = '';
  }
}
