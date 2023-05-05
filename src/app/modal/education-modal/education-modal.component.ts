import { Component } from '@angular/core';
import { BaseModalComponent } from '../base-modal/base-modal.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import {data} from '../../app.component'
import { RequestService } from 'src/app/services/request-service.service';

@Component({
  selector: 'app-education-modal',
  templateUrl: './education-modal.component.html',
  styleUrls: ['../base-modal/base-modal.component.css']
})
export class EducationModalComponent extends BaseModalComponent{
  form: FormGroup = new FormGroup({
    'carrera': new FormControl('', Validators.required),
    'institucion': new FormControl('', Validators.required),
    'ano': new FormControl('', Validators.required),
    'logo': new FormControl('', Validators.required),
  });

  isEditMode: boolean = false; // para indicar si estamos en modo edición o creación
  allData:Array<any> = [];
  // editID: number = 0;
  name: string;

  constructor(router:Router,route:ActivatedRoute,requestService:RequestService) {
    super(route,router,requestService);
    this.name = 'EducationModalComponent';
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.data['name'])
    this.editID = this.route.snapshot.queryParams['id'];
    if      ( this.route.snapshot.data['name'] == 'Educación' ){this.allData = this.requestService.data.education;}
    console.log(this.allData)
    if(this.editID){
      this.isEditMode = true;
      this.modalData = this.allData.find(objeto => 
        objeto.id == this.editID
        );
      // seteamos los valores del formulario con los datos obtenidos
      this.form.setValue({
        'carrera': this.modalData.carrera,
        'institucion': this.modalData.institucion,
        'ano': this.modalData.ano,
        'logo': this.modalData.logo,
      });
    }
    
  }

  override sendUpdateRequest(){
    this.requestBody = {
      'id': this.editID,
      'carrera': this.form.value.carrera,
      'institucion': this.form.value.institucion,
      'ano': this.form.value.ano,
      'logo': this.form.value.logo,
    }
    super.sendUpdateRequest();
  }
}
