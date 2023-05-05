import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  public voidData = {skills: [],education: [],projects: [],languages: [],contact: [{},{},{}],jobs: [],aboutme: {id: 0,texto: '',lenguaje: ''},}

  public getHeaders(){
    const reqHeaders = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token as string,
      })};
    return reqHeaders;
  }

  public postRequest(url:string, data:any){
    console.log(data,this.getHeaders());
    return this.httpClient.post(environment.apiURL+url, data, this.getHeaders());
  }
  public deleteRequest(url:string){
    console.log(this.getHeaders());
    return this.httpClient.delete(environment.apiURL+url, this.getHeaders());
  }
}



