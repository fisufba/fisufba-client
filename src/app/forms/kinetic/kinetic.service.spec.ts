import { TestBed } from '@angular/core/testing';

import { KineticService } from './kinetic.service';

describe('KineticService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KineticService = TestBed.get(KineticService);
    expect(service).toBeTruthy();
  });
});
