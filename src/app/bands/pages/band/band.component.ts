import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { BandsService } from '../../services/bands.service';
import { Band } from '../../interfaces/bands.interface';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class BandComponent implements OnInit {

  band!: Band;

  constructor( private activatedRoute: ActivatedRoute,
               private bandsService: BandsService,
               private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.bandsService.getBandPorId(id) )
      )
      .subscribe( band => this.band = band );

  }

  regresar() {
    this.router.navigate(['/listado']);
  }

}
