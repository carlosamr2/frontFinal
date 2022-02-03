
import { Injectable } from '@angular/core';
import { Token } from '../interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class AlmacenamientoTokensService {

  constructor() { }

  public guardarTokens(token : Token){
    window.sessionStorage.removeItem("token");
    window.sessionStorage.setItem("token", token.token);
  }

  public obtenerToken(){
    return window.sessionStorage.getItem("token");
  }

}
