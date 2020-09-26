import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalRegistroComponent } from 'src/app/components/modal-registro/modal-registro.component';
import { ModalLoginComponent } from '../../../components/modal-login/modal-login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModalRegistro() {
    this.modalRef = this.modalService.show(ModalRegistroComponent, { class: 'modal-lg', ignoreBackdropClick: true, });
  }

  openModalLogin() {
    this.modalRef = this.modalService.show(ModalLoginComponent, { ignoreBackdropClick: true });
  }

}
