import { TestBed } from '@angular/core/testing';

import { SuppmediaService } from './suppmedia.service';

describe('SuppmediaService', () => {
  let service: SuppmediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuppmediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
