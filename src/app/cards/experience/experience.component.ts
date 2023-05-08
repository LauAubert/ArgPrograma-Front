import { Component, Input } from '@angular/core';
import { BaseEditorComponent } from '../base-editor/base-editor.component';
import { ModalComunicationService } from 'src/app/services/modal-comunication.service';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request-service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent extends BaseEditorComponent{
  // items:any[];
  title:string;
  // @Input() set itemsVar(i:any[]) {this.items = i;}
  @Input() set titleVar(t:string) {this.title = t;}
  
  constructor(requestService:RequestService, router:Router) {
    super(router, requestService);
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
  }

  onImageLoadError(event: any) {
    event.target.src = '/assets/images/image-default.png';
  }
}
