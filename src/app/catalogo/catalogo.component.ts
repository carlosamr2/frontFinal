import { Component, OnInit } from '@angular/core';
import { ShopProductos } from '../interfaces/shopProductos';
import { ShopProductosService } from '../services/shop-productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos !: ShopProductos[];

  constructor(private shopProductos : ShopProductosService) {
    this.mostrarProductos();
  }

  ngOnInit(): void {
  }

  mostrarProductos(){
    this.shopProductos.obtenerProductos().subscribe((productos : ShopProductos[])=>{
      this.productos = productos;
    })
  }

}
