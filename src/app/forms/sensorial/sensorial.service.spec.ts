import { TestBed } from '@angular/core/testing';

import { SensorialService } from './sensorial.service';

describe('SensorialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SensorialService = TestBed.get(SensorialService);
    expect(service).toBeTruthy();
  });
});
