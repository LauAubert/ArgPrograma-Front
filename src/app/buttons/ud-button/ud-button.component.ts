import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ud-button',
  templateUrl: './ud-button.component.html',
  styleUrls: ['./../buttons.css']
})
export class UdButtonComponent {
  @Output() private deleteEvent = new EventEmitter<string>();
  @Output() private updateEvent = new EventEmitter<string>();
  @Input() set itemVar(item:any){this.item = item;}
  item:any;

  deleteEmitter(item:any) {
    this.deleteEvent.emit(item); 
  }
  updateEmitter(item:any) {
    this.updateEvent.emit(item); 
  }
}
