import { TestBed } from '@angular/core/testing';

import { GistsService } from './gists.service';

describe('GistsService', () => {
  let service: GistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
