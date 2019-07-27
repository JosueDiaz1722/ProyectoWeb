import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TransporteComponent } from './transporte/transporte.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CompraComponent } from './compra/compra.component';
import {StepsModule} from 'primeng/steps';

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
    CompraComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    StepsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
