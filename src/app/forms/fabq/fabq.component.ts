import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fabq',
  templateUrl: './fabq.component.html',
  styleUrls: ['./fabq.component.css']
})
export class FabqComponent implements OnInit {

  form: any;
  score: number = 0;
  width: number = 0;


  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'causaDor': new FormControl(),
      'fisicaPiora': new FormControl(),
      'atividadeCostas': new FormControl(),
      'naofisica': new FormControl(),
      'naofisica1': new FormControl(),
      'causaTrabalho': new FormControl(),
      'trabalhoPiora': new FormControl(),
      'pensao': new FormControl(),
      'trabalhoPesado': new FormControl(),
      'trabalhoPiora1': new FormControl(),
      'trabalhoPiora2': new FormControl(),
      'trabalhoPiora3': new FormControl(),
      'trabalhoPiora4': new FormControl(),
      'trabalhoPiora5': new FormControl(),
      'trabalhoPiora6': new FormControl(),
      'retornaTrabalho': new FormControl(),
    });
  }

  onUpdateForm() {
    this.score = 0;
    for( let value in this.form.value) {
      this.score += Number(this.form.value[value]);
    }
    this.width = (100*this.score)/96;
  }

}
