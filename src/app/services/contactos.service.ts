import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DatosContactanos } from '../interfaces/datosContactanos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private clienteHTTP : HttpClient) {}

  enviarFormulario(datos : DatosContactanos){
    return this.clienteHTTP.post<string>(`${environment.api}/contactanos`, datos);
  }

  obtenerCiudades(){
    return this.clienteHTTP.get<string[]>(`${environment.api}/ciudades`);
  }

}
