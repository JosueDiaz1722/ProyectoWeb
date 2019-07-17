import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PerfilComponent } from './perfil/perfil.component';
import { TransporteComponent } from './transporte/transporte.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactanosComponent,
    NavMenuComponent,
    PerfilComponent,
    TransporteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


