import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoComentariosComponent } from './producto-comentarios.component';

describe('ProductoComentariosComponent', () => {
  let component: ProductoComentariosComponent;
  let fixture: ComponentFixture<ProductoComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoComentariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
