import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { VentasTableComponent } from '../../components/ventas-table/ventas-table.component';
import { Venta } from '../../interfaces/ventas.interface';
import { State } from '../../interfaces/state.interface';
import { VentasService } from '../../services/ventas/ventas.service';

@Component({
  selector: 'app-ventas',
  imports: [VentasTableComponent, AlertComponent],
  templateUrl: './ventas.page.html',
})
export class VentasPage {

  ventas: Venta[] = [];

  state: State = 'init';

  private ventasService = inject(VentasService);

    ngOnInit(): void {
    this.state = 'loading';
    this.ventasService.getAllVentas().subscribe({
      next: (ventas) => {
        this.ventas = ventas;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }



}
