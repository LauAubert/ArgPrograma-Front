import { Component } from '@angular/core';
import { BaseModalComponent } from '../base-modal/base-modal.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {data} from '../../app.component'

@Component({
  selector: 'app-education-modal',
  templateUrl: './education-modal.component.html',
  styleUrls: ['../base-modal/base-modal.component.css']
})
export class EducationModalComponent extends BaseModalComponent{
  form: FormGroup = new FormGroup({
    'degree': new FormControl('', Validators.required),
    'school': new FormControl('', Validators.required),
    'year': new FormControl('', Validators.required),
    'icon': new FormControl('', Validators.required),
  });

  isEditMode: boolean = false; // para indicar si estamos en modo edición o creación
  allData:Array<any> = [];
  editID: number = 0;
  name: string;

  constructor(router:Router,route:ActivatedRoute) {
    super(route,router);
    this.name = 'EducationModalComponent';
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.data['name'])
    this.editID = this.route.snapshot.queryParams['id'];
    if      ( this.route.snapshot.data['name'] == 'Educación' ){this.allData = data.education;}
    console.log(this.allData)
    if(this.editID){
      this.isEditMode = true;
      this.modalData = this.allData.find(objeto => 
        objeto.id == this.editID
        );
      // seteamos los valores del formulario con los datos obtenidos
      this.form.setValue({
        'degree': this.modalData.degree,
        'school': this.modalData.school,
        'year': this.modalData.year,
        'icon': this.modalData.icon,
      });
    }
    
  }

}
