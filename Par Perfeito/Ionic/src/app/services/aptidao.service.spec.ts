import { TestBed } from '@angular/core/testing';

import { AptidaoService } from './aptidao.service';

describe('AptidaoService', () => {
  let service: AptidaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AptidaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
