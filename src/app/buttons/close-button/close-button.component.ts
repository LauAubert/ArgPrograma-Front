import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-close-button',
  templateUrl: './close-button.component.html',
  styleUrls: ['../buttons.component.css']
})
export class CloseButtonComponent {
  @Output() closeModal = new EventEmitter<string>();
  buttonClicked() {
    this.closeModal.emit('close');
  }
}
