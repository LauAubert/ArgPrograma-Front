import { Component } from '@angular/core';
import { BaseEditorComponent } from '../base-editor/base-editor.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends BaseEditorComponent{
  constructor(router:Router) {super(router);}
}
