import { TestBed } from '@angular/core/testing';

import { ProductoServicoService } from './producto-servico.service';

describe('ProductoServicoService', () => {
  let service: ProductoServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
