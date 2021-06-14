import { TestBed } from '@angular/core/testing';

import { IdentiteService } from './identite.service';

describe('IdentiteService', () => {
  let service: IdentiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
