import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ControlFacturas } from '../interfaces/controlFacturas';
import { DatosTotal } from '../interfaces/datosTotal';
import { MetodosDePago } from '../interfaces/metodosDePago';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  constructor(private clienteHTTP : HttpClient) { }

  obtenerDatosFacturacion(anio: number){
    return this.clienteHTTP.get<ControlFacturas[]>(`${environment.api}/estadisticas/facturacion-anual`, {params: new HttpParams().set( "anio" , anio )});
  }

  obtenerDatosPago(anio: number){
    return this.clienteHTTP.get<MetodosDePago[]>(`${environment.api}/estadisticas/tipos-pago`, {params: new HttpParams().set( "anio" , anio )});
  }

  obtenerIngresosTotales(anio: number){
    return this.clienteHTTP.get<DatosTotal[]>(`${environment.api}/estadisticas/ingresos-anuales`, {params: new HttpParams().set( "anio" , anio )});
  }


}
