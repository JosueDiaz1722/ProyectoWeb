import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css'],
  styles:[
    `.ui-steps .ui-steps-item {
            width: 25%;
        }

        .ui-steps.steps-custom {
            margin-bottom: 30px;
        }

        .ui-steps.steps-custom .ui-steps-item .ui-menuitem-link {
            height: 10px;
            padding: 0 1em;
        }

        .ui-steps.steps-custom .ui-steps-item .ui-steps-number {
            background-color: #0081c2;
            color: #FFFFFF;
            display: inline-block;
            width: 36px;
            border-radius: 50%;
            margin-top: -14px;
            margin-bottom: 10px;
        }

        .ui-steps.steps-custom .ui-steps-item .ui-steps-title {
            color: #555555;
        }
    `],
    encapsulation: ViewEncapsulation.None,
})



export class CompraComponent implements OnInit {

  items: MenuItem[];
    
    activeIndex: number = 0;
    paso1=true;
    paso2=false;
    paso3=false;
    lista= [{nombre:'Auto1',marca:"Marca1"},{nombre:'Auto2',marca:"Marca2"},{nombre:'Auto3',marca:"Marca3"}];
    lista2= [{imagen:'../../assets/imagenes/Rectangle 532.png',descripcion:"Auto1",numero:"3",precio:"$ 10"},{imagen:'../../assets/imagenes/Rectangle 532.png',descripcion:"Auto1",numero:"3",precio:"$ 10"},{imagen:'../../assets/imagenes/Rectangle 532.png',descripcion:"Auto1",numero:"3",precio:"$ 10"}];

    constructor() {}

    ngOnInit() {
        this.items = [{
                label: 'Compra',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.desactivarPasos();
                    this.paso1=true;
                    
                }
            },
            {
                label: 'Pago',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.desactivarPasos();
                    this.paso2=true;
                }
            },
            {
                label: 'Realizar Pedido',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.desactivarPasos();
                   this.paso3=true;
                }
            },
        ];
    }


  employees = [
    {'paquete': 'India', imagen: "../../assets/imagenes/auto.png", descripcion:'email@email.com', cantidad:'',precio:''},
   { 'paquete': 'Suiza', imagen: "../../assets/imagenes/auto.png", descripcion:'email@email.com', cantidad:'',precio:''},
   { 'paquete': 'India', imagen: "../../assets/imagenes/auto.png", descripcion:'email@email.com', cantidad:'',precio:''},
   { 'paquete': 'India', imagen: "../../assets/imagenes/auto.png", descripcion:'email@email.com', cantidad:'',precio:''},
   { 'paquete': 'India', imagen: "../../assets/imagenes/auto.png", descripcion:'email@email.com', cantidad:'',precio:''},
   { 'paquete': 'India', imagen: "../../assets/imagenes/auto.png", descripcion:'email@email.com', cantidad:'',precio:''},


  ];
  
  title:string = 'Angular Crud';
  
  msg:string = '';
  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addEmployee():void{
    this.employees.push(this.model);
    this.msg = 'campo agregado';
  }

  deleteEmployee(i):void {
    var answer = confirm('Estas seguro querer eliminarlo?');
    if(answer) {
      this.employees.splice(i, 1);
      this.msg = 'campo eliminado';
    }
  }

  myValue;
  editEmployee(i):void {
    this.hideUpdate = false;
    this.model2.paquete = this.employees[i].paquete;
    this.model2.imagen = this.employees[i].imagen;
    this.model2.descripcion= this.employees[i].descripcion;
    this.model2.cantidad = this.employees[i].cantidad;
    this.model2.precio= this.employees[i].precio;
    this.myValue = i;
  }

  updateEmployee():void {
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j) {
        this.employees[i] = this.model2;
        this.msg = 'campo actualizado';
        this.model2 = {};
      }
    }
  }

  closeAlert():void {
    this.msg = '';
  }
    desactivarPasos(){
      this.paso1=false;
      this.paso2=false;
      this.paso3=false;
    }

    StepCompra() {
        this.activeIndex = 1;
        this.desactivarPasos();
        this.paso2=true;
    }

    StepPayment() {
        this.activeIndex = 2;
        this.desactivarPasos();
        this.paso3=true;
    }
}
