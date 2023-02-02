import { Component } from '@angular/core';
import * as data from './dataTemplate.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ArgPrograma-Front';
  isCollapsed:boolean = true;
  data = data;
}
