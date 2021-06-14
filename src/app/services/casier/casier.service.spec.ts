import { TestBed } from '@angular/core/testing';

import { CasierService } from './casier.service';

describe('CasierService', () => {
  let service: CasierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
