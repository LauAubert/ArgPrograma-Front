import { Component } from '@angular/core';
import { BaseModalComponent } from '../base-modal/base-modal.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {data} from '../../app.component'

@Component({
  selector: 'app-aboutme-modal',
  templateUrl: './aboutme-modal.component.html',
  styleUrls: ['../base-modal/base-modal.component.css']
})
export class AboutmeModalComponent extends BaseModalComponent{
  form: FormGroup = new FormGroup({
    text: new FormControl('', Validators.required),
  });

  isEditMode: boolean = true;
  allData:string = data.aboutme;
  name: string;
  constructor(router:Router,route:ActivatedRoute) {
    super(route,router);
    this.name = 'AboutmeModalComponent';
  }

  ngOnInit(): void {
    this.form.setValue({
      'text': this.allData,
    });
  }
}
