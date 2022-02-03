import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Token } from '../interfaces/token';
import { map } from 'rxjs/operators';
import { AlmacenamientoTokensService } from './almacenamiento-tokens.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private clienteHTTP : HttpClient, private ats: AlmacenamientoTokensService) { }

  login(correo : string, password : string){
    return this.clienteHTTP.post<Token>(`${environment.api}/login`, {correo : correo , password : password}).pipe(
      map((token)=>{
        if (token){
          this.ats.guardarTokens(token);
          this.ats.saveUser(token);
        }
      })
    );
  }

}
