import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request-service.service';

@Component({
  selector: 'app-base-editor',
  templateUrl: './base-editor.component.html',
  styleUrls: ['./base-editor.component.css']
})
export class BaseEditorComponent implements OnInit{
  name: string;
  editing: boolean = false;
  modalID: number = 0;
  router:any;
  requestService:RequestService;
  items:any;
  isLogged:boolean = false;
  @Input() set nameIdentifier(n:string) {this.name = n;}
  @Input() set modalIdentifier(e:number) {this.modalID = e;}
  @Input() set itemsVar(i:any) {this.items = i;}
  constructor(router:Router, requestService:RequestService) { 
    this.router = router;
    this.requestService = requestService;
    this.isLogged = this.requestService.isLogged;
    this.name = 'BaseEditorComponent';
  }
  
  handleEditEvent(event:string,id:any=0) { 
    // procesa el evento del botón base-button
    console.log(event+id);
    if(event=='edit') this.toggleEditing();
    if(event=='add') this.create();
    if(event=='open' ||event=='create') this.open(0);
    if(event=='update') {try {this.open(id);} catch(e) {console.log(e);}}
  }
  
  open(item:number) {
    if (item !=0){
      this.router.navigateByUrl(this.name + '?id='+item);
    }
    else {
      console.log('Abriendo...'+this.name);
      this.router.navigateByUrl(this.name);
    }
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

  openUpdateModal(item:any) {
    this.open(item);
  }
}
