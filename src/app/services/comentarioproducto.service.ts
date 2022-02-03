import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComentarioproductoService {

  constructor(private httpClient: HttpClient) { }

  obtenerComentarios(idProducto: number){
    return this.httpClient.get(`${environment.api}/productos/comentarios/${idProducto}`)
  }

  comentar(comentario: string, idProducto:number){
    return this.httpClient.post(`${environment.api}/productos/comentarios/${idProducto}`,{
      comentario: comentario
    })
  }

  eliminar(idComentario : number){
    return this.httpClient.delete(`${environment.api}/productos/comentarios/${idComentario}`)
  }
  modificar(comentario:string, idComentario:number){
    return this.httpClient.put(`${environment.api}/productos/comentarios/${idComentario}`,{comentario:comentario})
  }

}
