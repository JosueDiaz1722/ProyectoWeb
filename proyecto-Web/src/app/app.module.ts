import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TransporteComponent } from './transporte/transporte.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CompraComponent } from './compra/compra.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgImageSliderModule } from 'ng-image-slider';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {StepsModule} from 'primeng/steps';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import {AuthService} from './servicios/auth.service'
import { FormsModule} from '@angular/forms'
import {AngularFireModule} from '@angular/fire'
import {AngularFireAuthModule} from '@angular/fire/auth'
import {environment} from '../environments/environment'


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactanosComponent,
    NavMenuComponent,
    PaquetesComponent,
    PerfilComponent,
    TransporteComponent,
    PedidosComponent,
    CompraComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    NgImageSliderModule,
    AngularFontAwesomeModule,
    StepsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
