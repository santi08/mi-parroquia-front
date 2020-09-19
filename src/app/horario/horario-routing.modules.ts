import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorarioComponent } from './components/horario/horario.component';
import { HorariosComponent } from './components/horarios/horarios.component';

const routes: Routes = [
  {
    path: '',
    component: HorariosComponent
  },
  {
    path: ':id',
    component: HorarioComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class HorarioRoutingModule {}