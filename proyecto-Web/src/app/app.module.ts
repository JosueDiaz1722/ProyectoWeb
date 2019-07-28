import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CarouselModule} from 'primeng/carousel';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';



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
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule ,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
