import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styles:[`
        .ui-steps .ui-steps-item {
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
    encapsulation: ViewEncapsulation.None
})
export class CompraComponent implements OnInit {

  items: MenuItem[];

    activeIndex: number = 1;
    paso1=true;
    paso2=false;
    paso3=false;
    paso4=false;

    constructor() {}

    ngOnInit() {
        this.items = [{
                label: 'Personal',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.desactivarPasos();
                    this.paso1=true;
                    
                }
            },
            {
                label: 'Seat',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.desactivarPasos();
                    this.paso2=true;
                }
            },
            {
                label: 'Payment',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.desactivarPasos();
                   this.paso3=true;
                }
            },
            {
                label: 'Confirmation',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.desactivarPasos();
                    this.paso4=true;
                }
            }
        ];
    }

    desactivarPasos(){
      this.paso1=false;
      this.paso2=false;
      this.paso3=false;
      this.paso4=false;
    }

}
