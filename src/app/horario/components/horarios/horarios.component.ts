import { Component, OnInit } from '@angular/core';
import { Horario } from 'src/app/models/horario';
import { HorarioService } from 'src/app/services/horario/horario.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})
export class HorariosComponent implements OnInit {

  horarios: Horario[];

  pagination = {
    pageNumber: 1,
    pageSize: 5,
    totalPages: 0,
    totalItems: 0
  }

  constructor(public _horarioService: HorarioService) { }

  ngOnInit() {
  }

  listarHorarios() {
    this._horarioService.listarHorarios(this.pagination.pageSize, this.pagination.pageNumber)
      .subscribe(response => {
        this.horarios = response.items;
        this.pagination = response.pagination
      })
  }

}
