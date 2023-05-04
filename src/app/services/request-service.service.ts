import { Injectable } from '@angular/core';
// import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor() { }
  public data:any ;
  public isLogged:boolean = localStorage.getItem('Authorization') != null;
  public token:string|null = localStorage.getItem('Authorization');
}



