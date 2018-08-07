import { TestBed, inject } from '@angular/core/testing';

import { AcademiaService } from './academia.service';

describe('AcademiaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcademiaService]
    });
  });

  it('should be created', inject([AcademiaService], (service: AcademiaService) => {
    expect(service).toBeTruthy();
  }));
});
