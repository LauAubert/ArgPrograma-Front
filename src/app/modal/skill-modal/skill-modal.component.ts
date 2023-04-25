import { Component } from '@angular/core';
import { BaseModalComponent } from '../base-modal/base-modal.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {data} from '../../app.component'

@Component({
  selector: 'app-skill-modal',
  templateUrl: './skill-modal.component.html',
  styleUrls: ['../base-modal/base-modal.component.css']
})

export class SkillModalComponent extends BaseModalComponent{
  form: FormGroup = new FormGroup({
    'name': new FormControl('', Validators.required),
    'description': new FormControl('', Validators.required),
    'level': new FormControl('', Validators.required)
  });
  isEditMode: boolean = false; // para indicar si estamos en modo edición o creación
  allData:Array<any> = [];
  // defino T como un objeto con las propiedades que voy a usar
  //modalData: any; // objeto para guardar los datos a editar
  editID: number = 0;

  name: string;
  constructor(router:Router,route:ActivatedRoute) {
    super(route,router);
    this.name = 'SkillModalComponent';  
  }
  ngOnInit(): void {
    console.log(this.route.snapshot.data['name'])
    this.editID = this.route.snapshot.queryParams['id'];
    if      ( this.route.snapshot.data['name'] == 'Idioma' ){this.allData = data.languages;}
    else if ( this.route.snapshot.data['name'] == 'Habilidad'  ){this.allData = data.skills;}
    console.log(this.allData)
    if(this.editID){
      this.isEditMode = true;
      this.modalData = this.allData.find(objeto => 
        objeto.id == this.editID
        );
      // seteamos los valores del formulario con los datos obtenidos
      this.form.setValue({
        'name': this.modalData.name,
        'description': this.modalData.description,
        'level': this.modalData.level,
      });
    }
    
  }
}
