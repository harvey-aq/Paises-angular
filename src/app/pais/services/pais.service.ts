import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams() {

    return new HttpParams()
          .set('fields', 'name;capital;alpha2Code;flag;population');

  }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {

    const url =  `${ this._apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } );

    // return this.http.get( url )
    //   .pipe(
    //     catchError( err => of([]) )
    //   );

  }

  buscarCapital( capital: string ): Observable<Country[]>{

    const url = `${ this._apiUrl }/capital/${ capital }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );

  }
  
  getPaisPorAlpha( id: string ): Observable<Country>{

    const url = `${ this._apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );

  }

  buscarRegion( region: string ): Observable<Country[]> {


    const url = `${ this._apiUrl }/region/${ region }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } )
            .pipe(
              // tap( console.log )
            )

  }

}
