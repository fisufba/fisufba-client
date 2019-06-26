import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-pi-pe',
  templateUrl: './pi-pe.component.html',
  styleUrls: ['./pi-pe.component.css']
})
export class PiPeComponent implements OnInit {

  form: any;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'piMax': new FormControl(),
      'peMax': new FormControl(),
    });
  }
}
