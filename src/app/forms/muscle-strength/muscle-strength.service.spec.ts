import { TestBed } from '@angular/core/testing';

import { MuscleStrengthService } from './muscle-strength.service';

describe('MuscleStrengthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MuscleStrengthService = TestBed.get(MuscleStrengthService);
    expect(service).toBeTruthy();
  });
});
