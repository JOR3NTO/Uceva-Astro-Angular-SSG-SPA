import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribuidoresPage } from './distribuidores.page';

describe('DistribuidoresPage', () => {
  let component: DistribuidoresPage;
  let fixture: ComponentFixture<DistribuidoresPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistribuidoresPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistribuidoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
