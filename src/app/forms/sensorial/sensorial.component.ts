import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sensorial',
  templateUrl: './sensorial.component.html',
  styleUrls: ['./sensorial.component.css']
})
export class SensorialComponent implements OnInit {

  form: any;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'toqueLeveRight': new FormControl(),
      'toqueLeveLeft': new FormControl(),
      'pressaoRight': new FormControl(),
      'pressaoLeft': new FormControl(),
      'picadasRight': new FormControl(),
      'picadasLeft': new FormControl(),
      'temperaturaRight': new FormControl(),
      'temperaturaLeft': new FormControl(),
      'locTatilRight': new FormControl(),
      'locTatilLeft': new FormControl(),
      'toqueBilateralSimul': new FormControl(),
      'propiocepcao': new FormControl(),
    });
  }

}
