import { Component } from '@angular/core';
import { BaseModalComponent } from '../base-modal/base-modal.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import {data} from '../../app.component'
import { RequestService } from 'src/app/services/request-service.service';


@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['../base-modal/base-modal.component.css']
})
export class ContactModalComponent extends BaseModalComponent{
  form: FormGroup = new FormGroup({
    location: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  isEditMode: boolean = true; // para indicar si estamos en modo edición o creación
  allData:Array<any>;// = data.contact;
  name: string;
  constructor(router:Router,route:ActivatedRoute,requestService:RequestService) {
    super(route,router,requestService);
    this.name = 'ContactModalComponent';
    this.allData = requestService.data.contact;
  }

  ngOnInit(): void {
    // seteamos los valores del formulario con los datos obtenidos
    this.form.setValue({
      'location': this.allData[0].texto,
      'email': this.allData[1].texto,
      'phone': this.allData[2].texto,
    });
  }
}
