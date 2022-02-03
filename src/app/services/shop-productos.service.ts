import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShopProductos } from '../interfaces/shopProductos';

@Injectable({
  providedIn: 'root'
})
export class ShopProductosService {

  constructor(private clienteHTTP : HttpClient) { }

  obtenerProductos(){
    return this.clienteHTTP.get<ShopProductos[]>(`${environment.api}/productos`);
  }

}
