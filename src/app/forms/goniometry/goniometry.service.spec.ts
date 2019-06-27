import { TestBed } from '@angular/core/testing';

import { GoniometryService } from './goniometry.service';

describe('GoniometryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoniometryService = TestBed.get(GoniometryService);
    expect(service).toBeTruthy();
  });
});
