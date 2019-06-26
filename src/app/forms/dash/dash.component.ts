import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  form:any;
  score:number = 0;
  width:number = 0;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'abrirVidro': new FormControl(),
      'escrever': new FormControl(),
      'prepararRefeicao': new FormControl(),
      'abrirPorta': new FormControl(),
      'prateleira': new FormControl(),
      'tarefasDomesticas': new FormControl(),
      'jardinagem': new FormControl(),
      'arrumarCama': new FormControl(),
      'carregarSacola': new FormControl(),
      'objetoPesado': new FormControl(),
      'trocarLampada': new FormControl(),
      'lavarCabelo': new FormControl(),
      'lavarCostas': new FormControl(),
      'vestirBlusa': new FormControl(),
      'usarFaca': new FormControl(),
      'atividades1': new FormControl(),
      'atividades2': new FormControl(),
      'atividades3': new FormControl(),
      'transporte': new FormControl(),
      'sexo': new FormControl(),
      'atividadesFamilia': new FormControl(),
      'atividadesDiarias': new FormControl(),
      'dorNoBraco': new FormControl(),
      'dorAtividade': new FormControl(),
      'dormencia': new FormControl(),
      'fraqueza': new FormControl(),
      'rigidez': new FormControl(),
      'dificuldadeDormir': new FormControl(),
      'inutil': new FormControl(),
    });
  }

  onUpdateForm() {
    this.score = 0;
    for( let value in this.form.value) {
      this.score += Number(this.form.value[value]);
    }
    this.width = (100*this.score)/145;
  }

}
