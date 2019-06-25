import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lefs',
  templateUrl: './lefs.component.html',
  styleUrls: ['./lefs.component.css']
})
export class LefsComponent implements OnInit {

  form: any;
  score: number = 0;
  width: number = 0;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'atividades': new FormControl(),
      'passatempos': new FormControl(),
      'obstaculo': new FormControl(),
      'quartoSala': new FormControl(),
      'calcar': new FormControl(),
      'agachado': new FormControl(),
      'levantar': new FormControl(),
      'atividadesLeves': new FormControl(),
      'atividadesPesadas': new FormControl(),
      'carro': new FormControl(),
      'doisQuarteiroes': new FormControl(),
      'umkm': new FormControl(),
      'escada': new FormControl(),
      'emPe': new FormControl(),
      'sentado': new FormControl(),
      'plano': new FormControl(),
      'acidentado': new FormControl(),
      'direcao': new FormControl(),
      'pulinhos': new FormControl(),
      'rolar': new FormControl(),
    });
  }

  onUpdateForm() {
    this.score = 0;
    for( let value in this.form.value) {
      this.score += Number(this.form.value[value]);
    }
    this.width = (100*this.score)/80;
  }

}
