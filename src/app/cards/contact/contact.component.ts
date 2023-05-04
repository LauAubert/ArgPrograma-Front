import { Component } from '@angular/core';
import { BaseEditorComponent } from '../base-editor/base-editor.component';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends BaseEditorComponent{
  constructor( requestService:RequestService,router:Router) {super(router,requestService);}
}
