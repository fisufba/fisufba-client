import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-boston-protocol',
  templateUrl: './boston-protocol.component.html',
  styleUrls: ['./boston-protocol.component.css']
})
export class BostonProtocolComponent implements OnInit {

  form: any;
  width: number;
  score: number = 0;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'dorPunho': new FormControl(),
      'acordaDorPunho': new FormControl(),
      'diaDorPunho': new FormControl(),
      'noiteDorPunho': new FormControl(),
      'tempoDorDia': new FormControl(),
      'adormecimento': new FormControl(),
      'fraqueza': new FormControl(),
      'formigamento': new FormControl(),
      'formigamentoNoite': new FormControl(),
      'formigamentoAcorda': new FormControl(),
      'dificuldadeObjetos': new FormControl(),
      'escrever': new FormControl(),
      'abotoar': new FormControl(),
      'livro': new FormControl(),
      'telefone': new FormControl(),
      'domesticos': new FormControl(),
      'tampa': new FormControl(),
      'saco': new FormControl(),
      'banho': new FormControl(),
      'vestir': new FormControl(),
    });
  }

    onUpdateForm() {
      this.score = 0;
      for( let value in this.form.value) {
          this.score += Number(this.form.value[value]);
      }
      console.log(this.score)
      this.width = (100*this.score)/100;
  }

}
