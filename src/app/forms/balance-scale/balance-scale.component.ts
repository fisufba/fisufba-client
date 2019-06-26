import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-balance-scale',
  templateUrl: './balance-scale.component.html',
  styleUrls: ['./balance-scale.component.css']
})
export class BalanceScaleComponent implements OnInit {
  form: any;
  score: number = 0;
  width: number = 0;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'leva': new FormControl(),
      'lev': new FormControl(),
      'semApoioPe': new FormControl(),
      'permanecerSentado': new FormControl(),
      'senta': new FormControl(),
      'cadeira': new FormControl(),
      'olhosFechados': new FormControl(),
      'pesJuntos': new FormControl(),
      'alcancaFrente': new FormControl(),
      'virar': new FormControl(),
      'girar': new FormControl(),
      'banquinho': new FormControl(),
      'semApoio': new FormControl(),
      'umaPerna': new FormControl(),
    });
  }


  onUpdateForm() {
    this.score = 0;
    for( let value in this.form.value) {
      this.score += Number(this.form.value[value]);
    }
    this.width = (100*this.score)/52;
  }
}
