import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-aofas',
  templateUrl: './aofas.component.html',
  styleUrls: ['./aofas.component.css']
})
export class AofasComponent implements OnInit {

  form: any;
  score: number = 0;
  width: number = 0;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'dor': new FormControl(),
      'funcional': new FormControl(),
      'distancia': new FormControl(),
      'superficie': new FormControl(),
      'anormalidade': new FormControl(),
      'sagital': new FormControl(),
      'mobilidade': new FormControl(),
      'estabilidade': new FormControl(),
      'alinhamento': new FormControl(),
    })
  }

  onUpdateForm() {
    this.score = 0;
    for( let value in this.form.value) {
      this.score += Number(this.form.value[value]);
    }
    this.width = (100*this.score)/145;
  }

}
