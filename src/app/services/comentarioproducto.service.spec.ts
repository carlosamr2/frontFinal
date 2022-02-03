import { TestBed } from '@angular/core/testing';

import { ComentarioproductoService } from './comentarioproducto.service';

describe('ComentarioproductoService', () => {
  let service: ComentarioproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentarioproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
