import { Component,  } from '@angular/core';

import { BaseModalComponent } from '../base-modal/base-modal.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/services/request-service.service';
// import {data} from '../../app.component'


interface T {
  id: number;
  titulo: string;
  ano: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-experience-modal',
  templateUrl: './experience-modal.component.html',
  styleUrls: ['../base-modal/base-modal.component.css']
})
export class ExperienceModalComponent extends BaseModalComponent {
  form: FormGroup = new FormGroup({
    titulo: new FormControl('', Validators.required),
    ano: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
  });
  isEditMode: boolean = false; // para indicar si estamos en modo edición o creación
  allData:Array<T> = this.requestService.data.projects.concat(this.requestService.data.jobs);
  // defino T como un objeto con las propiedades que voy a usar
  //modalData: any; // objeto para guardar los datos a editar
  // editID: number = 0;
  constructor( route: ActivatedRoute, router: Router, requestService: RequestService) {
    super(route , router, requestService); 
  }
  
  ngOnInit(): void {
    this.editID = this.route.snapshot.queryParams['id'];
    console.log(this.editID)
    // si el data.name de app-routing.module.ts es igual a 'Proyecto'
    console.log(this.requestService.data)
    if      ( this.route.snapshot.data['name'] == 'Proyecto' ){this.allData = this.requestService.data.projects;}
    else if ( this.route.snapshot.data['name'] == 'Trabajo'  ){this.allData = this.requestService.data.jobs;}
    // this.modalData = data.projects[this.route.snapshot.queryParams['id']-1]
    // console.log(this.modalData)
    // comprobamos si estamos en modo edición o creación
    if (this.editID) {
      // si existe el id en los parámetros de la url, es porque estamos editando
      this.isEditMode = true;
      this.modalData = this.allData.find(objeto => 
        objeto.id == this.editID
        );
      // seteamos los valores del formulario con los datos obtenidos
      this.form.setValue({
        'titulo': this.modalData.titulo,
        'ano': this.modalData.ano,
        'descripcion': this.modalData.descripcion,
        'imagen': this.modalData.imagen,
      });
    }
  }

}

// console.log(this.route.snapshot.queryParams['id'])
// this.modalData = data.projects[this.route.snapshot.queryParams['id']-1]