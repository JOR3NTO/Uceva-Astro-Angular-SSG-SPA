import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribuidoresTableComponent } from './distribuidores-table.component';

describe('DistribuidoresTableComponent', () => {
  let component: DistribuidoresTableComponent;
  let fixture: ComponentFixture<DistribuidoresTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistribuidoresTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistribuidoresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
