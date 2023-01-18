import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularTiempoComponent } from './calcular-tiempo.component';

describe('CalcularTiempoComponent', () => {
  let component: CalcularTiempoComponent;
  let fixture: ComponentFixture<CalcularTiempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcularTiempoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcularTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
