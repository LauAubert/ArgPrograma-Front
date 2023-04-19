import { Component,  } from '@angular/core';

import { BaseModalComponent } from '../base-modal/base-modal.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {data} from '../../app.component'


interface T {
  id: number;
  name: string;
  year: string;
  description: string;
}

@Component({
  selector: 'app-experience-modal',
  templateUrl: './experience-modal.component.html',
  styleUrls: ['../base-modal/base-modal.component.css']
})
export class ExperienceModalComponent extends BaseModalComponent {
  form: FormGroup = new FormGroup({
    'title': new FormControl('', [Validators.required]),
    'date': new FormControl('', [Validators.required]),
    'description': new FormControl('', [Validators.required])
  });
  isEditMode: boolean = false; // para indicar si estamos en modo edición o creación
  allData:Array<T> = [];
  // defino T como un objeto con las propiedades que voy a usar
  //modalData: any; // objeto para guardar los datos a editar
  editID: number = 0;
  constructor( route: ActivatedRoute, router: Router) {
    super(route , router); 
    this.editURL = this.route.snapshot.data['name'];
  }
  
  ngOnInit(): void {
    this.editID = this.route.snapshot.queryParams['id'];
    console.log(this.route.snapshot.queryParams['id'])
    // si el data.name de app-routing.module.ts es igual a 'Proyecto'
    if      ( this.route.snapshot.data['name'] == 'Proyecto' ){this.allData = data.projects;}
    else if ( this.route.snapshot.data['name'] == 'Trabajo'  ){this.allData = data.jobs;}
    // this.modalData = data.projects[this.route.snapshot.queryParams['id']-1]
    // console.log(this.modalData)
    // comprobamos si estamos en modo edición o creación
    if (this.route.snapshot.queryParams['id']) {
      // si existe el id en los parámetros de la url, es porque estamos editando
      this.isEditMode = true;
      console.log(this.allData.find(objeto => objeto.id == 1))
      this.modalData = this.allData.find(objeto => 
        objeto.id == this.route.snapshot.queryParams['id']
        );
      // seteamos los valores del formulario con los datos obtenidos
      this.form.setValue({
        'title': this.modalData.name,
        'date': this.modalData.year,
        'description': this.modalData.description
      });
    }
  }

}

// console.log(this.route.snapshot.queryParams['id'])
// this.modalData = data.projects[this.route.snapshot.queryParams['id']-1]