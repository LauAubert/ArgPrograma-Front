import { Component, Input} from '@angular/core';
import { BaseEditorComponent } from '../base-editor/base-editor.component';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request-service.service';
// import {Globals} from './../../globals';
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent extends BaseEditorComponent{
  texto:string;
  textoTemp:string;
  constructor(requestService:RequestService,router:Router) {
    super(router,requestService);
    this.name = 'AboutmeComponent';
    this.texto = 'Texto de AboutmeComponent';
    this.textoTemp = "";
  }
  override toggleEditing(): void {
    super.toggleEditing();
    this.textoTemp = this.texto;
  }
  override ngOnInit(): void {
    this.texto = this.items.texto;
    this.textoTemp = this.texto;
  }
  override save(): void {
    super.save();
    this.texto = this.textoTemp;
    this.toggleEditing();
    // enviar al servidor
  }
}
