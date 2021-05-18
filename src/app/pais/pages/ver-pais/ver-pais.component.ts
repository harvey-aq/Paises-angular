import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( private acvtivateRoute: ActivatedRoute, private paisServices: PaisService ) { }

  ngOnInit(): void {

    this.acvtivateRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisServices.getPaisPorAlpha( id ) ),
        // tap( console.log )
      )
      .subscribe( pais => this.pais = pais);

    // this.acvtivateRoute.params
    //   .subscribe( ({ id }) => {
    //     console.log( id );

    //     this.paisServices.getPaisPorAlpha(id)
    //       .subscribe( pais => {
    //         console.log(pais);
    //       });

    //   } );

  }

}
