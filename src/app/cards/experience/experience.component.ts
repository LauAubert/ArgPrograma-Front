import { Component, Input } from '@angular/core';
import { BaseEditorComponent } from '../base-editor/base-editor.component';
import { ModalComunicationService } from 'src/app/services/modal-comunication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent extends BaseEditorComponent{
  items:any[];
  title:string;
  @Input() set itemsVar(i:any[]) {this.items = i;}
  @Input() set titleVar(t:string) {this.title = t;}
  
  constructor(private modalComunicationService:ModalComunicationService, router:Router) {
    super(router);
    this.name = 'ExperienceComponent';
    this.items = [];
    this.title = 'ExperienceComponent';
  }
  // editar
  editor_modal_on:boolean=true;
  curtain_on:boolean=false;

  // envia los datos para que el modal los reciba
  send_data_to_modal(item:any,action:string) {
    // console.log('Enviando datos al modal...');
    this.modalComunicationService.sendInfo(
      {
        modalId:this.modalID,
        dataContainer:this.name,
        action:action,
        data:item
      }
    );
  }

  openUpdateModal(item:any) {
    this.open(item);
  }
}
