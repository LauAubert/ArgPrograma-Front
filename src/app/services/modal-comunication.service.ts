import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ModalComunicationService {
  // maneja las suscripciones, todos los suscriptores reciben el mismo valor
  private data = new Subject<any>();
  modalState = this.data.asObservable();
  constructor() { }
  
  // funcion que envia el mensaje
  sendInfo(info:any) { 
    this.data.next(info);
    // console.log(info);
  }
}

export interface Data{
  modalId:number;
  dataContainer:string;
  action:string;
  data:any;
}

/* EJEMPLO DE COMO RECIBIR
  import { ModalComunicationService } from 'src/app/services/modal-comunication.service';

  constructor(private modalComunicationService:ModalComunicationService) { }
  ngOnInit(): void {
    this.modalComunicationService.modalState.subscribe((state:boolean)=>{
      console.log(state);
    });
  }


*/ 

/* EJEMPLO DE COMO ENVIAR
  import { ModalComunicationService } from 'src/app/services/modal-comunication.service';

  constructor(private modalComunicationService:ModalComunicationService) { }
  ngOnInit(): void {
    this.modalComunicationService.changeModalState(true);
  }

*/


/*
data:any = {
  modalId:number,
  dataContainer:string,
  action:string,
  data:any
}
*/