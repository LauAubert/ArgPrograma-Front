import { Component,  } from '@angular/core';

import { BaseModalComponent } from '../base-modal/base-modal.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {data} from '../../app.component'

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
  //modalData: any; // objeto para guardar los datos a editar

  constructor(private route: ActivatedRoute) {super(); }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams['id'])
    this.modalData = data.projects[this.route.snapshot.queryParams['id']-1]
    console.log(this.modalData)
    // comprobamos si estamos en modo edición o creación
    if (this.route.snapshot.queryParams['id']) {
      // si existe el id en los parámetros de la url, es porque estamos editando
      this.isEditMode = true;
      // aquí podemos hacer una solicitud GET para obtener los datos del formulario a editar
      // supongamos que los datos vienen en un objeto "data"
      this.modalData = data.projects[this.route.snapshot.queryParams['id']];
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