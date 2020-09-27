import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Horario } from 'src/app/models/horario';

@Injectable({
  providedIn: 'root'
})
export class HorarioService{

  constructor(public http: HttpClient) { }

  listarHorarios(iglesiaId, pageSize?, pageNumber?){
    let url = `${URL_SERVICIOS}/iglesias/${iglesiaId}/horarios`;

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

  // crearHorario(area: Horario){
  //   let url = `${URL_SERVICIOS}/areas`;
  //   return this.http.post<Horario>(url, area);
  // }

  // editarHorario(horario: Horario){
  //   let url = `${URL_SERVICIOS}/areas/${horario.horarioId}`;
  //   return this.http.put(url, horario);
  // }
}
