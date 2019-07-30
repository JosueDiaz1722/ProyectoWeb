import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component'
import {PaquetesComponent} from './paquetes/paquetes.component'
import {TransporteComponent} from './transporte/transporte.component'
import {PedidosComponent} from './pedidos/pedidos.component'
import {CompraComponent} from './compra/compra.component'
import {PerfilComponent} from './perfil/perfil.component'
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import {AuthGuard} from './guards/auth.guard'

const routes: Routes = [
  {
    path:'',
    component: InicioComponent
  },
  {
    path:'paquetes',
    component: PaquetesComponent
  },
  {
    path:'transporte',
    component: TransporteComponent
  },
  {
    path:'pedidos',
    component: PedidosComponent
  },
  {
    path:'compra',
    component: CompraComponent
  }
  ,
  {
    path:'perfil',
    component: PerfilComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'registro',
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
