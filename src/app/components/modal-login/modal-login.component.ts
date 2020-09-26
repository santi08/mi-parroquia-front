import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AccountService } from '../../core/services/account/account.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {


  username: string = "";
  password: string = "";

  constructor(public modalRef: BsModalRef,
    public router: Router,
    public _accountService: AccountService,
    public toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  iniciarSesion() {
    let login = {
      identificacion: this.username.toString(),
      password: this.password
    }

    this._accountService.login(login)
      .subscribe((respuesta) => {
        this.toastr.success('Hello world!', 'Toastr fun!');

      })


  }

}
