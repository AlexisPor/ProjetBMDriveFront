import { TestBed } from '@angular/core/testing';

import { AgentbmService } from './agentbm.service';

describe('AgentbmService', () => {
  let service: AgentbmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentbmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
