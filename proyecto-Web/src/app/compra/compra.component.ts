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
