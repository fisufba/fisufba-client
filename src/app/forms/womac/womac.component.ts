import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-womac',
  templateUrl: './womac.component.html',
  styleUrls: ['./womac.component.css']
})
export class WomacComponent implements OnInit {

  form: any;
  score: number = 0;
  width: number = 0;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'caminharPlano': new FormControl(),
      'escadas': new FormControl(),
      'noiteCama': new FormControl(),
      'sentandoDeitando': new FormControl(),
      'emPe': new FormControl(),
      'descerEscadas': new FormControl(),
      'subirEscadas': new FormControl(),
      'levantar': new FormControl(),
      'dificuldadeEmPe': new FormControl(),
      'abaixar': new FormControl(),
      'andarPlano': new FormControl(),
      'carro': new FormControl(),
      'compras': new FormControl(),
      'colocarMeias': new FormControl(),
      'levantarCama': new FormControl(),
      'meias': new FormControl(),
      'cama': new FormControl(),
      'banho': new FormControl(),
      'sentar': new FormControl(),
      'sentarVaso': new FormControl(),
      'tarefasPesadas': new FormControl(),
      'tarefasLeves': new FormControl(),
      'rigidezAcordar': new FormControl(),
      'rigidezDeitar': new FormControl(),
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
