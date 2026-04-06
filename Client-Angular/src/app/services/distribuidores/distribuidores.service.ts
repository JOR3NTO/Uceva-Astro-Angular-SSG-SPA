import { Injectable } from '@angular/core';
import { DISTRIBUIDORES } from '../../data/distribuidores.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DistribuidoresService {

  getAllDistribuidores() {
    return of(DISTRIBUIDORES);
  }

}
