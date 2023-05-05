import { Component } from '@angular/core';
import { BaseModalComponent } from '../base-modal/base-modal.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request-service.service';
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
  allData:any; // = data.aboutme;
  name: string;
  constructor(router:Router,route:ActivatedRoute, requestService:RequestService) {
    super(route,router,requestService);
    this.name = 'AboutmeModalComponent';
    this.allData = this.requestService.data.aboutme;
  }

  ngOnInit(): void {
    this.allData = this.requestService.data.aboutme;
    this.form.setValue({
      'text': this.allData.texto,
    });
  }

  override sendUpdateRequest(){
    this.requestBody = {
      'id': 1,
      'texto': this.form.value.text,
    }
    super.sendUpdateRequest();
  }
}
