import { TestBed } from '@angular/core/testing';

import { AshworthService } from './ashworth.service';

describe('AshworthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AshworthService = TestBed.get(AshworthService);
    expect(service).toBeTruthy();
  });
});
