import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-oswestry',
  templateUrl: './oswestry.component.html',
  styleUrls: ['./oswestry.component.css']
})
export class OswestryComponent implements OnInit {

  form: any;
  score: number = 0;
  width: number = 0;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'intensidadeDor': new FormControl(),
      'cuidadosPessoais': new FormControl(),
      'carga': new FormControl(),
      'caminhar': new FormControl(),
      'sentar': new FormControl(),
      'posicao': new FormControl(),
      'repouso': new FormControl(),
      'atividadeSexual': new FormControl(),
      'vidaSocial': new FormControl(),
      'viagem': new FormControl(),
    })
  }

  onUpdateForm() {
    this.score = 0;
    for( let value in this.form.value) {
      this.score += Number(this.form.value[value]);
    }
    this.width = (100*this.score)/50;
  }

}
