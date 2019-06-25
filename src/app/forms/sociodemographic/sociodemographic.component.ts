import { Component, OnInit } from '@angular/core';
import { FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-sociodemographic',
  templateUrl: './sociodemographic.component.html',
  styleUrls: ['./sociodemographic.component.css']
})
export class SociodemographicComponent implements OnInit {

  form: any;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'civilSatus': new FormControl(),
      'habitationStatus': new FormControl(),
      'education': new FormControl(),
      'ocupationalStatus': new FormControl(),
      'currentJob': new FormControl(),
      'lastJob': new FormControl(),
      'sick': new FormControl(),
      'medicine': new FormControl(),
    });

  }

}
