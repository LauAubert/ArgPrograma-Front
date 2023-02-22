import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseEditorComponent } from '../base-editor/base-editor.component';
import { ModalComunicationService } from 'src/app/services/modal-comunication.service';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent extends BaseEditorComponent{
  items:any[];
  title:string;
  @Input() set itemsVar(i:any[]) {this.items = i;}
  @Input() set titleVar(t:string) {this.title = t;}

  constructor(private modalComunicationService:ModalComunicationService) {
    super();
    this.name = 'SkillComponent';
    this.items = [];
    this.title = 'SkillComponent';
  }

  openModal(event:any){
    this.modalComunicationService.sendInfo(
      {
        modalId:this.modalID,
        dataContainer:this.name,
        action:'edit',
        data:event
      }
    );
  }
}
