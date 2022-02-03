import { TestBed } from '@angular/core/testing';

import { ShopProductosService } from './shop-productos.service';

describe('ShopProductosService', () => {
  let service: ShopProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
