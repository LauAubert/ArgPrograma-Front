import { Component, Input } from '@angular/core';
import { BaseEditorComponent } from '../base-editor/base-editor.component';
import { ModalComunicationService } from 'src/app/services/modal-comunication.service';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request-service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent extends BaseEditorComponent{
  title:string;
  @Input() set titleVar(t:string) {this.title = t;}

  constructor(requestService:RequestService,router:Router) {
    super(router, requestService);
    this.name = 'EducationComponent';
    // this.items = [];
    this.title = 'EducationComponent';
  }

}
