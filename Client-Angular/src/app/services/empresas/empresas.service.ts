import { Injectable } from '@angular/core';
import { EMPRESAS } from '../../data/empresas.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpresasService {
  getAllEmpresas() {
    return of(EMPRESAS);
  }

}
