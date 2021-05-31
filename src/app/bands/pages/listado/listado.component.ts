import { Component, OnInit } from '@angular/core';
import { BandsService } from '../../services/bands.service';
import { Band } from '../../interfaces/bands.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  bands: Band[] = [];
  
  constructor( private bandsService: BandsService ) { }

  ngOnInit(): void {

    this.bandsService.getBands()
      .subscribe( bands => this.bands = bands );

  }

}
