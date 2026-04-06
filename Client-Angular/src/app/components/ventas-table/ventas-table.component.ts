import { Component, Input } from '@angular/core';
import { Venta } from '../../interfaces/ventas.interface';
import { BadgeAtom } from '@brejcha13320/design-system-bootstrap';

@Component({
  selector: 'app-ventas-table',
  imports: [BadgeAtom],
  templateUrl: './ventas-table.component.html',
})
export class VentasTableComponent {

  @Input() ventas: Venta[] = [];



}
