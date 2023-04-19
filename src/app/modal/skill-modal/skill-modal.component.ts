import { Component } from '@angular/core';
import { BaseModalComponent } from '../base-modal/base-modal.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skill-modal',
  templateUrl: './skill-modal.component.html',
  styleUrls: ['../base-modal/base-modal.component.css']
})
export class SkillModalComponent extends BaseModalComponent{

  name: string;
  constructor(router:Router,route:ActivatedRoute) {
    super(route,router);
    this.name = 'SkillModalComponent';
    
  }
  form: FormGroup = new FormGroup({
    'title': new FormControl('', [Validators.required]),
    'date': new FormControl('', [Validators.required]),
    'description': new FormControl('', [Validators.required])
  });
  ngOnInit(): void {
    console.log(this.route.snapshot.data['name'])
  }
}
