import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ModalComunicationService {
  // maneja las suscripciones, todos los suscriptores reciben el mismo valor
  private apiUrl = 'http://localhost:3000'; // Reemplazar por tu API URL
  private token: string = '';

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }
  isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }
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