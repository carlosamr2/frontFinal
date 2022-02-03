
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
  public obtenerUsuario(){
    const user = window.sessionStorage.getItem("user");
    if (user)
      return JSON.parse(user)
    return {}
  }
  public saveUser(user:Token){
    window.sessionStorage.removeItem("user");
    window.sessionStorage.setItem("user", JSON.stringify(user.user));
  }

}
