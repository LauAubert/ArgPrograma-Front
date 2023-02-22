import { Component, Input } from '@angular/core';
import { BaseEditorComponent } from '../base-editor/base-editor.component';
import { ModalComunicationService } from 'src/app/services/modal-comunication.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent extends BaseEditorComponent{
  items:any[];
  title:string;
  @Input() set itemsVar(i:any[]) {this.items = i;}
  @Input() set titleVar(t:string) {this.title = t;}

  constructor(private modalComunicationService:ModalComunicationService) {
    super();
    this.name = 'EducationComponent';
    this.items = [];
    this.title = 'EducationComponent';
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
