import { TestBed } from '@angular/core/testing';

import { PainScaleService } from './pain-scale.service';

describe('PainScaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PainScaleService = TestBed.get(PainScaleService);
    expect(service).toBeTruthy();
  });
});
