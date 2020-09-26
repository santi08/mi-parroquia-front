import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registro } from '../../../models/registro';
import { URL_SERVICIOS } from 'src/app/config/config';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  registrarUsuario(usuario: Registro) {
    let url = URL_SERVICIOS + '/usuarios/register';
    return this.http.post(url, usuario)
  }
  
}
