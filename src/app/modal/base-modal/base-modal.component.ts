import { Component, Output, EventEmitter, Input ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: []
})
export class BaseModalComponent {
  modalID:number = 0;
  @Input() set modalIDVar(t:number) {this.modalID = t;}

  modalData:any = null;
  @Input() set modalDataVar(t:any) {this.modalData = t;}
  @Input() URL:string = '';
  show:boolean = false;
  //input con el json y el ID de modal
  @Input() set idTriggerVar(trig:number) {
    // console.log(trig);
    if (trig==this.modalID){
      this.show=true;
    }
  }


  @Output() closeModal = new EventEmitter<string>();
  emitCloseModal() {
    
    this.show=false;
    // this.closeModal.emit('close');
    // console.log({
    //   modalId: this.modalID,
    //   data: this.modalData,
    //   currentModalId: this.modalID,
    // });
  }

  editURL:string    = '';
  removeURL:string  = '';
  backURL:string    = '/';

  route: ActivatedRoute;
  router: Router;
  constructor(route: ActivatedRoute,router: Router){
    this.route = route;
    this.router = router;
  }

  sendUpdateRequest(){}
  sendRemoveRequest(){}
  backToHome(){
    this.router.navigate([this.backURL]);
  }
}
