import { TestBed } from '@angular/core/testing';
import { DistribuidoresService } from './distribuidores.service';
import { DISTRIBUIDORES } from '../../data/distribuidores.interface';

describe('DistribuidoresService', () => {
  let service: DistribuidoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistribuidoresService);
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllDistribuidores debería retornar un observable con los distribuidores', (done) => {
      service.getAllDistribuidores().subscribe(distribuidores => {
        expect(distribuidores).toEqual(DISTRIBUIDORES);
        expect(distribuidores.length).toBe(DISTRIBUIDORES.length);
        done();
      });
    });

  });

});
