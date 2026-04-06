import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Venta } from '../../interfaces/ventas.interface';
import { VENTAS } from '../../data/ventas.interface';

@Injectable({
  providedIn: 'root',
})
export class VentasService {
  getAllVentas(): Observable<Venta[]> {
    return of(VENTAS);
  }
}
