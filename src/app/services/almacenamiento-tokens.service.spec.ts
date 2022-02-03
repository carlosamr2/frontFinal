import { TestBed } from '@angular/core/testing';

import { AlmacenamientoTokensService } from './almacenamiento-tokens.service';

describe('AlmacenamientoTokensService', () => {
  let service: AlmacenamientoTokensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlmacenamientoTokensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
