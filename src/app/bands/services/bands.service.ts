import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Band } from '../interfaces/bands.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getBands(): Observable<Band[]> {
    return this.http.get<Band[]>(`${ this.baseUrl }/bands`);
  }

  getBandPorId( id: string ):Observable<Band> {
    return this.http.get<Band>(`${ this.baseUrl }/bands/${ id }`);
  }

  getSugerencias( termino: string ): Observable<Band[]> {
    return this.http.get<Band[]>(`${ this.baseUrl }/bands?q=${ termino }&_limit=6`);
  }

  agregarBand( band: Band ): Observable<Band> {
    return this.http.post<Band>(`${ this.baseUrl }/bands`, band );
  }

  actualizarBand( band: Band ): Observable<Band> {
    return this.http.put<Band>(`${ this.baseUrl }/bands/${ band.id }`, band );
  }

  borrarBand( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/bands/${ id }`);
  }

}
