import { TestBed } from '@angular/core/testing';

import { PiPeService } from './pi-pe.service';

describe('PiPeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PiPeService = TestBed.get(PiPeService);
    expect(service).toBeTruthy();
  });
});
