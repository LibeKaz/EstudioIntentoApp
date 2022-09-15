import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisdatosComponent } from '../misdatos/misdatos.component';
import { CertificacionesComponent } from '../certificaciones/certificaciones.component';
import { ExperienciaLaboralComponent } from '../experiencia-laboral/experiencia-laboral.component';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'misdatos',
        component: MisdatosComponent
      },
      {
        path: 'certificaciones',
        component: CertificacionesComponent
      },
      {
        path: 'experiencia-laboral',
        component: ExperienciaLaboralComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
