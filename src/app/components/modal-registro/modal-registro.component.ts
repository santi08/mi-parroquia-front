import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Registro } from '../../models/registro';
import { UserService } from '../../core/services/user/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-modal-registro',
  templateUrl: './modal-registro.component.html',
  styleUrls: ['./modal-registro.component.scss']
})
export class ModalRegistroComponent implements OnInit {
  

  registro: Registro = {
    primerNombre: "",
    primerApellido: "",
    identificacion : "",
    fechaNacimiento: null,
    userName: "",
    tipoIdentificacion: "",
    email: "",
    password: ""
  }

  constructor(public modalRef: BsModalRef,
    public router: Router,
    public _usuarioService : UserService,
    // public toastr: ToastrService
  ) { }

  ngOnInit() { }

  registrarUsuario() { 

    let identificacionString = this.registro.identificacion.toString();

    this.registro.userName = identificacionString;
    this.registro.identificacion = identificacionString;
    
    this._usuarioService.registrarUsuario(this.registro)
    .subscribe((usuario)=>{

    });

    
    // this.toastr.error('everything is broken', 'Major Error', {
    //   timeOut: 3000,
    // });
  }

}
