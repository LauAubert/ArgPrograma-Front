import { Component, Output,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.css']
})
export class BaseButtonComponent {
  @Output() private editEvent = new EventEmitter<string>();
  emitter(value:string) {
    this.editEvent.emit(value); 
    // this.editing=!this.editing;
  }
  @Input() set editVar(e:boolean) {this.editing = e;}
  @Input() set hasSaveVar(s:boolean) {this.has_save = s;}
  has_save = false;
  logged:boolean = true;
  editing = false;
}
