import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Band } from '../../interfaces/bands.interface';
import { BandsService } from '../../services/bands.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string  = '';
  bands: Band[] = [];
  bandSeleccionado: Band | undefined;

  constructor( private bandsService: BandsService ) { }

  ngOnInit(): void {
  }


  buscando() {

    this.bandsService.getSugerencias( this.termino.trim() )
      .subscribe( bands => this.bands = bands );

  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

    if(!event.option.value) {
      this.bandSeleccionado = undefined;
      return;
    }

    const band: Band = event.option.value;
    this.termino = band.name;

    this.bandsService.getBandPorId( band.id! )
      .subscribe( band => this.bandSeleccionado = band );
  }

}
