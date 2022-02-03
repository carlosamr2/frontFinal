import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DevelopersComponent } from './developers/developers.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReporteComponent } from './reporte/reporte.component';
import { JwtInterceptor } from './interceptores/jwt.interceptor';
import { ReportesComponent } from './reportes/reportes.component';
import { ProductoComentariosComponent } from './producto-comentarios/producto-comentarios.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    CatalogoComponent,
    GraphicsComponent,
    ContactoComponent,
    DevelopersComponent,
    PaymentComponent,
    LoginComponent,
    DashboardComponent,
    NoAccessComponent,
    ReporteComponent,
    ReportesComponent,
    ProductoComentariosComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
