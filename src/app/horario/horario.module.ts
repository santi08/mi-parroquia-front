import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioComponent } from './components/horario/horario.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { HorarioRoutingModule } from './horario-routing.modules';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HorarioComponent,
    HorariosComponent],
  imports: [
    CommonModule,
    SharedModule,
    HorarioRoutingModule
  ]
})
export class HorarioModule { }
