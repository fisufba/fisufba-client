import { TestBed } from '@angular/core/testing';

import { SociodemographicService } from './sociodemographic.service';

describe('SociodemographicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SociodemographicService = TestBed.get(SociodemographicService);
    expect(service).toBeTruthy();
  });
});
