import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Reserva } from 'src/app/models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService{

  constructor(public http: HttpClient) { }

  listarHorarios(horarioId, pageSize?, pageNumber?){
    let url = `${URL_SERVICIOS}/horarios/${horarioId}/reservas`;

    let params = new HttpParams;

    if (pageNumber != null && pageSize != null) {
      params = params.append('pageNumber', pageNumber);
      params = params.append('pageSize', pageSize);
    }

    return this.http.get(url, {params})
                .pipe(
                  map((response:any) => {
                    let pagination = {
                      pageSize: pageSize,
                      pageNumber: pageNumber,
                      totalPages: Math.ceil(response.totalItems / pageSize),
                      totalItems: response.totalItems
                    }

                    return {items: response.items, pagination: pagination};
                  })
                )
  }

  // cargarHorario(areaId): Observable<Horario> {
  //   let url = `${URL_SERVICIOS}/areas/${areaId}`;
  //   return this.http.get<Horario>(url);
  // }

  // crearHorario(area: Reserva){
  //   let url = `${URL_SERVICIOS}/areas`;
  //   return this.http.post<Reserva>(url, area);
  // }

  // editarHorario(horario: Reserva){
  //   let url = `${URL_SERVICIOS}/areas/${horario.horarioId}`;
  //   return this.http.put(url, horario);
  // }
}
