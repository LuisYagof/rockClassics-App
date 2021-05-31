import { Component, Input } from '@angular/core';
import { Band } from '../../interfaces/bands.interface';

@Component({
  selector: 'app-band-tarjeta',
  templateUrl: './band-tarjeta.component.html',
  styles: [`
  mat-card {
    margin-top: 20px
  }
`]
})
export class BandTarjetaComponent{

  @Input() band!: Band;

}
