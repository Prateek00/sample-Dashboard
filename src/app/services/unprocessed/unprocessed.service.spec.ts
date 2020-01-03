import { TestBed } from '@angular/core/testing';

import { UnprocessedService } from './unprocessed.service';

describe('UnprocessedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnprocessedService = TestBed.get(UnprocessedService);
    expect(service).toBeTruthy();
  });
});
