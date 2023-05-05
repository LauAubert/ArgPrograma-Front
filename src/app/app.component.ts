import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as data from './dataTemplate.json';
// import { LocalStorage } from '@ngx-pwa/local-storage';
import { RequestService } from './services/request-service.service';
import { environment } from 'src/environments/environments';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  constructor(
    private http:HttpClient,
    public requestService:RequestService,
    private router:Router,
  ) { 
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {this.getRequest();}
    });
  }
  
  ngOnInit(): void {
    this.data = this.requestService.voidData;
    this.getRequest();
  }



  getRequest(){
    this.http.get(environment.apiURL+'all/').subscribe(data => {
      console.log(data);
      this.requestService.data = data;
      this.data = data;
    }, error => {console.error(error);});
  }

  title = 'ArgPrograma-Front';
  isCollapsed:boolean = true;
  isLogged:boolean = localStorage.getItem('Authorization') != null;
  data:any;
}
// export {data};
