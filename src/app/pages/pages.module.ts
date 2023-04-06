import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AppRoutingModule } from '../app-routing.module';
import { IntegranteComponent } from './integrante/integrante.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [ServiciosComponent,QuienesSomosComponent, DashboardComponent, IntegranteComponent],
  exports:[ServiciosComponent,QuienesSomosComponent, DashboardComponent, IntegranteComponent]
})
export class PagesModule { }