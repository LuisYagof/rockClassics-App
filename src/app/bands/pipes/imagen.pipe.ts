import { Pipe, PipeTransform } from '@angular/core';
import { Band } from '../interfaces/bands.interface';

@Pipe({
  name: 'imagen',
  // pure: true
})
export class ImagenPipe implements PipeTransform {

  transform( band: Band ): string {

    if( !band.id && !band.alt_img ) {
      return 'assets/no-image.png';
    } else if ( band.alt_img ) {
      return band.alt_img;
    } else {
      return `assets/bands/${ band.id }.jpg`;
    }


  }

}
