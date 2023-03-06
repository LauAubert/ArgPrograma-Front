import { Component} from '@angular/core';
import { ModalComunicationService, Data } from 'src/app/services/modal-comunication.service';

@Component({
  selector: 'app-curtain',
  templateUrl: './curtain.component.html',
  styleUrls: ['./curtain.component.css']
})
export class CurtainComponent {
  curtainOn:boolean = false;
  currentModalID:number = 0;
  currentData:any = null;
  constructor(private modalComunicationService:ModalComunicationService) {
  }

  ngOnInit(): void {
    this.modalComunicationService.modalState.subscribe((data:Data)=>{
      console.log(data);
      this.curtainOn = true;
      this.currentModalID = data.modalId;
      this.currentData = data.data;
      console.log('opened curtain: '+this.currentModalID);

    });
  }

  handleEvent(message: any) {
    // console.log(message);
    if (message === 'close') {
      this.currentModalID=0;
      this.curtainOn=false;
      console.log('closed curtain: '+this.currentModalID);
    }
  }


}

