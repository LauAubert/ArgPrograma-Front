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
  logged:boolean = true;
  editing = false;
}
