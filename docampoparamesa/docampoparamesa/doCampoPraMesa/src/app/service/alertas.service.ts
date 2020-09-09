import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  

  constructor(private  bsModalService: BsModalService) { }

  private showAlert(message: string, type: string){
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertasComponent)
    bsModalRef.content.type = type 
    bsModalRef.content.message = message
  }

  showAlertDanger(message: string){
    this.showAlert (message, 'danger')
  }

  showAlertSucess(message: string){
    this.showAlert (message, 'success')
  }

  showAlertInfo(message: string){
    this.showAlert (message, 'info')
  }

}
