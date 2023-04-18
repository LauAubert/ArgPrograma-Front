import { Component} from '@angular/core';
import { BaseEditorComponent } from '../base-editor/base-editor.component';
import { Router } from '@angular/router';
// import {Globals} from './../../globals';
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent extends BaseEditorComponent{
  texto:string;
  textoTemp:string;
  constructor(router:Router) {
    super(router);
    this.name = 'AboutmeComponent';
    this.texto = 'Texto de AboutmeComponent';
    this.textoTemp = "";
  }
  override toggleEditing(): void {
    super.toggleEditing();
    this.textoTemp = this.texto;
  }
  override ngOnInit(): void {
    this.texto = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit animi necessitatibus, ipsum molestiae natus nulla! Expedita hic nostrum, nulla, optio velit praesentium maxime in neque aspernatur, dignissimos recusandae voluptate suscipit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos modi laudantium accusantium molestias eum exercitationem explicabo iure veniam, eius doloribus repellat at saepe, id veritatis quo libero officiis maiores ipsum?';
    this.textoTemp = this.texto;
  }
  override save(): void {
    super.save();
    this.texto = this.textoTemp;
    this.toggleEditing();
    // enviar al servidor
  }
}
