import { TestBed } from '@angular/core/testing';

import { SProfissionalService } from './s-profissional.service';

describe('SProfissionalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SProfissionalService = TestBed.get(SProfissionalService);
    expect(service).toBeTruthy();
  });
});
