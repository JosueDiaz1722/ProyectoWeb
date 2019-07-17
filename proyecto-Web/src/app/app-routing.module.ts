import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component'
import {PaquetesComponent} from './paquetes/paquetes.component'
import {TransporteComponent} from './transporte/transporte.component'
import {PedidosComponent} from './pedidos/pedidos.component'
import {CompraComponent} from './compra/compra.component'
import {PerfilComponent} from './perfil/perfil.component'


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
    component: PerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
