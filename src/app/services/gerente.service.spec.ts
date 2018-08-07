import { TestBed, inject } from '@angular/core/testing';

import { GerenteService } from './gerente.service';

describe('GerenteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GerenteService]
    });
  });

  it('should be created', inject([GerenteService], (service: GerenteService) => {
    expect(service).toBeTruthy();
  }));
});
