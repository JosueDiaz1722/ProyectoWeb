import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.component.html',
  styleUrls: ['./transporte.component.css']
})
export class TransporteComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
  cars=[];

  constructor() {
      this.cars = [
          {vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black', url:'playa.png'},
          {vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White'},
          {vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue'},
          {vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White'},
          {vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red'},
          {vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue'},
          {vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow'},
          {vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown'},
          {vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black'}
      ];
  }

 


}
