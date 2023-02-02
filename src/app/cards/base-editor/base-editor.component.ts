import { Component,OnInit } from '@angular/core';
import { using } from 'rxjs';

@Component({
  selector: 'app-base-editor',
  templateUrl: './base-editor.component.html',
  styleUrls: ['./base-editor.component.css']
})
export class BaseEditorComponent implements OnInit{
  name: string;
  editing: boolean = false;
  constructor() { 
    this.name = 'BaseEditorComponent';
  }
  
  handleEditEvent(event:string) { 
    // procesa el evento del botón base-button
    if(event=='edit') this.toggleEditing();
    if(event=='save') this.save();
  }
  
  toggleEditing() {
    let texto = this.editing ? 'Cancelando' : 'Editando';
    console.log(texto + '... ' + this.name);
    this.editing = !this.editing;
  }
  save(){}
  cancelEditing(){}

  create() {
    console.log('Creando...'+this.name);
  }

  update() {
    console.log('Actualizando...'+this.name);
  }

  delete() {
    console.log('Eliminando...'+this.name);
  }
  ngOnInit(): void {}
}
