import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-iad',
  templateUrl: './iad.component.html',
  styleUrls: ['./iad.component.css']
})
export class IadComponent implements OnInit {

  form: any;
  score: number = 0;
  width: number = 0;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'influencioDor': new FormControl(),
      'medicacaoPermanente': new FormControl(),
      'familiaTratamento': new FormControl(),
      'semCura1': new FormControl(),
      'medicamentoAlivia': new FormControl(),
      'ansiedadePiora': new FormControl(),
      'cuidado': new FormControl(),
      'desistiCura': new FormControl(),
      'atividades': new FormControl(),
      'estressePiora': new FormControl(),
      'exercicioFunciona': new FormControl(),
      'concentracao': new FormControl(),
      'remedioTrata': new FormControl(),
      'familia': new FormControl(),
      'depressao': new FormControl(),
      'exercicioPiora': new FormControl(),
      'pensamentos': new FormControl(),
      'carinho': new FormControl(),
      'impedeMovimento': new FormControl(),
      'controlaDor': new FormControl(),
      'medicinaCura': new FormControl(),
      'lidar': new FormControl(),
      'vidaAtiva1': new FormControl(),
      'semCura': new FormControl(),
      'emocoes': new FormControl(),
      'dorIndiferente': new FormControl(),
      'exerciciosRegulares': new FormControl(),
      'exercicioDiminui': new FormControl(),
      'procedimentoMedico': new FormControl(),
      'vidaAtiva': new FormControl(),
    });
  }

  onUpdateForm() {
    this.score = 0;
    for( let value in this.form.value) {
      this.score += Number(this.form.value[value]);
    }
    this.width = (100*this.score)/120;
  }

}
