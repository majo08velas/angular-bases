import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'fh-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  @Input() characterListFromChild: Character[] = [{
    id: '',
    name:'',
    role:''
  }]
  @Output() emitValueToDeleteToParent: EventEmitter<string> = new EventEmitter();

  emitValueToDelete(id:string):void{
    this.emitValueToDeleteToParent.emit(id);
  }
}
