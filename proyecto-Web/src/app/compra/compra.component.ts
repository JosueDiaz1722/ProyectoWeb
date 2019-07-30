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

    compras = [{'paquete': 'India', imagen: "../../assets/imagenes/Rectangle 441.png", descripcion:'La India es uno de los destinos más cautivantes del mundo. Las civilizaciones y la cultura india data de tiempos inmemorables, por los que existen muchos lugares antiguos que cautivan al visitante y los hacen remontarse a los primeros años de esta civilización. La India está dividida por regiones: el norte, el sur, el este, el oeste y las regiones centrales. Cada una de estas regiones tiene lugares que descubrir, por lo que es recomendable que pases una temporada en el país para que puedas descubrirlo en todo su esplendor.', cantidad:'1',precio:'3500,00'}];

  employees = [
    {'paquete': 'India', imagen: "../../assets/imagenes/Rectangle 441.png", descripcion:'La India es uno de los destinos más cautivantes del mundo. Las civilizaciones y la cultura india data de tiempos inmemorables, por los que existen muchos lugares antiguos que cautivan al visitante y los hacen remontarse a los primeros años de esta civilización. La India está dividida por regiones: el norte, el sur, el este, el oeste y las regiones centrales. Cada una de estas regiones tiene lugares que descubrir, por lo que es recomendable que pases una temporada en el país para que puedas descubrirlo en todo su esplendor.', cantidad:'1',precio:'3500,00'},
   { 'paquete': 'Suiza', imagen: "../../assets/imagenes/montania.png", descripcion:' Alpes suizos. Son famosos y una de las atracciones de Suiza, ocupan más del 70% del territorio y se distribuyen en los sectores centrales y meridionales, mientras que el Jura hace en el noroeste.Estas maravillas naturales son parte del mayor sistema montañoso de Europa y se reconocen por sus fantásticos picos con formas puntiagudas y sus grandes gargantas escarpadas.', cantidad:'1',precio:'2500,00'},
   { 'paquete': 'Isla del Caribe', imagen: "../../assets/imagenes/isla.png", descripcion:'Las Islas del Caribe es un enorme archipiélago situado en el mar Caribe, que se puede subdividir en unas pocas regiones diferentes: el archipiélago Lucayan, las grandes Antillas, pequeñas Antillas y las islas ABC. Hay 13 Estados soberanos y 17 territorios dependientes del Caribe, y los idiomas predominantes son el criollo inglés, español, Francés, holandés y antillano. El Caribe se extiende a través de más de 1,06 millones de millas cuadradas y está principalmente situado entre América del norte y América del sur.', cantidad:'1',precio:'3500,00'},
   { 'paquete': 'Disney', imagen: "../../assets/imagenes/disney.jpg", descripcion:'Parque Temático Magic Kingdom – Todo será más mágico y musical que nunca en el 2019 si nos acompañas en Mickey & Minnie’s Surprise Celebration.Te esperan nuevas experiencias de entretenimiento, productos, comidas y bebidas especiales, incluyendo Move It! Shake It! MousekeDance It! Street Party', cantidad:'1',precio:'3500,00'},
   { 'paquete': 'Muralla China', imagen: "../../assets/imagenes/china.jpg", descripcion:'Accede a la Gran Muralla de Mutianyu con un traslado en autobús con opciones desde el centro de Pekín. Disfruta de horario y punto de encuentro fijos con salidas diarias. Consigue acceso a Mutianyu y el billete de teleférico con tu traslado (opcional).', cantidad:'1',precio:'2995,00'},
   { 'paquete': 'Dubai', imagen: "../../assets/imagenes/dubai.jpg", descripcion:'Disfruta del Tour a Dubái. En este maravilloso destino descubrirás atracciones fuera de común. Dubái es uno de los siete emiratos que conforman los Emiratos Árabes Unidos, cuya capital es la ciudad homónima. Está situado en la costa del golfo Pérsico, en el desierto de Arabia, y limita al sur con el emirato de Abu Dabi, con el de Sharjah por el noreste y, a través del exclave de Hatta, con el Sultanato de Omán por el sureste y con los emiratos de Ajmán por el oeste y Ras al-Khaimah por el norte.', cantidad:'1',precio:'4223,00'},
   { 'paquete': 'Mexico', imagen: "../../assets/imagenes/mexico.jpg", descripcion:'México es un país que te brinda todo lo que buscas, su pasado con gran historia y tradición, Desde las grandiosas ciudades Mayas, arquitectura Tolteca, gran cultura Olmeca, y la grandeza Azteca. Además México tiene una gran gastronomía que la caracteriza a nivel mundial y que decir de las bellísimas playas en el mar caribe. En el centro histórico, camina por el zócalo y trata de identificar las influencias árabe y bizantina en la catedral de Nuestra Señora de la Soledad. Visita el mercado el Parazal y encuentra joyas de plata y artesanías hechas a mano en estos coloridos puestos..', cantidad:'1',precio:'4223,00'},


  ];
  
  title:string = 'Angular Crud';
  precio: Number =0;
  precio2: Number =0;
  msg:string = '';
  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addEmployee(i):void{
    this.compras.push(this.employees[i]);
    this.msg = 'campo agregado';
  }

  deleteEmployee(i):void {
    var answer = confirm('Estas seguro querer eliminarlo?');
    if(answer) {
      this.compras.splice(i, 1);
      this.msg = 'campo eliminado';
    }
  }

  myValue;
  editEmployee(i):void {
    this.hideUpdate = false;
    this.model2.cantidad = this.employees[i].cantidad;
    this.myValue = i;
  }

  updateEmployee():void {
   
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j) {
        this.precio = Number.parseFloat(this.compras[i].precio)/Number.parseFloat(this.compras[i].cantidad);
        console.log(this.precio);
        this.compras[i].cantidad = this.model2.cantidad;
        this.precio2 =Number(this.model2.cantidad)*Number(this.precio);
        this.compras[i].precio = this.precio2.toFixed(2).toString();
        this.msg = 'campo actualizado';
        this.model2 = {};
      }
    }
    this.hideUpdate = true;
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
