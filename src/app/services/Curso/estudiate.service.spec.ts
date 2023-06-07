import { TestBed } from '@angular/core/testing';

import { EstudiateService } from './estudiate.service';

describe('EstudiateService', () => {
  let service: EstudiateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudiateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
