import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-editor',
  templateUrl: './base-editor.component.html',
  styleUrls: ['./base-editor.component.css']
})
export class BaseEditorComponent implements OnInit{
  name: string;
  editing: boolean = false;
  modalID: number = 0;
  @Input() set nameIdentifier(n:string) {this.name = n;}
  @Input() set modalIdentifier(e:number) {this.modalID = e;}
  constructor() { 
    this.name = 'BaseEditorComponent';
  }
  
  handleEditEvent(event:string) { 
    // procesa el evento del botón base-button
    if(event=='edit') this.toggleEditing();
    if(event=='save') this.save();
    if(event=='add') this.create();
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

  update(n:number = 0) {
    console.log('Actualizando...'+this.name);
  }

  delete(n:number = 0) {
    console.log('Eliminando...'+this.name);
  }
  ngOnInit(): void {}
}
