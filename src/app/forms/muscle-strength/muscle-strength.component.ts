import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-muscle-strength',
  templateUrl: './muscle-strength.component.html',
  styleUrls: ['./muscle-strength.component.css']
})
export class MuscleStrengthComponent implements OnInit {

  n:number = 1;
  fields:any = Array.from({length: 1}, (x,i) => i);
  form: any;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'evaluatedMuscle': new FormControl(),
      'left': new FormControl(),
      'right': new FormControl(),
    });
  }

  updateFields() {
    this.fields = Array.from({length: this.n}, (x,i) => i);
  }

  addElement() {
    this.n++;
    this.updateFields();
  }

}
