import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { environment } from 'src/environments/environments';
// import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private httpClient:HttpClient) {
    this.httpClient = httpClient;
    this.httpClient.get(environment.apiURL+'all/').subscribe(data => {
      console.log(data);
      this.data = data;
  });
  }
  public data:any ;
  public isLogged:boolean = localStorage.getItem('Authorization') != null;
  public token:string|null = localStorage.getItem('Authorization');
  public voidData = {skills: [],education: [],projects: [],languages: [],contact: [],jobs: [],aboutme: {id: 0,texto: '',lenguaje: ''},}
}



