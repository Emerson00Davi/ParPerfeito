import { TestBed } from '@angular/core/testing';

import { PessoaTemCaracteristicaService } from './pessoa-tem-caracteristica.service';

describe('PessoaTemCaracteristicaService', () => {
  let service: PessoaTemCaracteristicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoaTemCaracteristicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
