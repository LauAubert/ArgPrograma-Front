import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as data from './dataTemplate.json';
// import { LocalStorage } from '@ngx-pwa/local-storage';
import { RequestService } from './services/request-service.service';
import { environment } from 'src/environments/environments';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private http:HttpClient,
    public requestService:RequestService,
  ) { }
  ngOnInit(): void {
    this.http.get(environment.apiURL+'all/').subscribe(data => {
      console.log(data);
      this.requestService.data = data;
  }, error => {console.error(error);});

}
  title = 'ArgPrograma-Front';
  isCollapsed:boolean = true;
  isLogged:boolean = localStorage.getItem('Authorization') != null;
  data:any;
}
// export {data};
