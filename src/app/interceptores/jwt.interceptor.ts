import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlmacenamientoTokensService } from '../services/almacenamiento-tokens.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private servicioTokens : AlmacenamientoTokensService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let request = req;
    var token = this.servicioTokens.obtenerToken();
    if (token){
        request = req.clone({
          headers: req.headers.set("Authorization","Bearer "+token)
        })
    }
    return next.handle(request);
  }
}
