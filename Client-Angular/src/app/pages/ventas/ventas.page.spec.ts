import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasPage } from './ventas.page';
import { VentasTableComponent } from '../../components/ventas-table/ventas-table.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { VentasService } from '../../services/ventas/ventas.service';
import { VENTAS } from '../../data/ventas.interface';
import { of, throwError } from 'rxjs';

describe('VentasPage', () => {
  let component: VentasPage;
  let fixture: ComponentFixture<VentasPage>;
  let ventasService: VentasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasPage, VentasTableComponent, AlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasPage);
    component = fixture.componentInstance;
    ventasService = TestBed.inject(VentasService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load ventas and set state to success', () => {
    jest.spyOn(ventasService, 'getAllVentas').mockReturnValue(of(VENTAS));

    expect(component.state).toBe('init');
    fixture.detectChanges();

    expect(component.state).toBe('success');
    expect(component.ventas).toEqual(VENTAS);
  });

  it('should set state to error when service fails', () => {
    jest.spyOn(ventasService, 'getAllVentas').mockReturnValue(throwError(() => new Error('API error')));

    fixture.detectChanges();

    expect(component.state).toBe('error');
    expect(component.ventas).toEqual([]);
  });
});
