import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { BandsRoutingModule } from './bands-routing.module';
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { BandComponent } from './pages/band/band.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BandTarjetaComponent } from './components/band-tarjeta/band-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    BandComponent,
    HomeComponent,
    ListadoComponent,
    BandTarjetaComponent,
    ImagenPipe,
    SafePipe,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    BandsRoutingModule
  ]
})
export class BandsModule { }
