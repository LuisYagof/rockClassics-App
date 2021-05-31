import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Band } from '../../interfaces/bands.interface';
import { BandsService } from '../../services/bands.service';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class AgregarComponent implements OnInit {

  band: Band = {
    name: '',
    genre: '',
    members: '',
    activity: '',
    origin: '',
    label: '',
    alt_img: '',
    video: ''
  }

  constructor( private bandsService: BandsService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               public dialog: MatDialog ) { }

  ngOnInit(): void {

    if( !this.router.url.includes('editar') ) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.bandsService.getBandPorId( id ) )
      )
      .subscribe( band => this.band = band );

  }

  guardar() {
    
    if( this.band.name.trim().length === 0  ) {
      return;
    }

    if ( this.band.id ) {
      // Actualizar
      this.bandsService.actualizarBand( this.band )
        .subscribe( band => this.mostrarSnakbar('Registro actualizado'));

    } else {
      // Crear
      this.bandsService.agregarBand( this.band )
        .subscribe( band => {
          this.router.navigate(['/editar', band.id ]);
          this.mostrarSnakbar('Registro creado');
        })
    }

  }

  borrarBand() {

    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      data: this.band
    });

    dialog.afterClosed().subscribe(
      (result) => {

        if( result ) {
          this.bandsService.borrarBand( this.band.id! )
            .subscribe( resp => {
              this.router.navigate(['/']);
            });
        }
        
      }
    )

  }

  mostrarSnakbar( mensaje: string ) {

    this.snackBar.open( mensaje, 'ok!', {
      duration: 2500
    });

  }

}
