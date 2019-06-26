import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ashworth',
  templateUrl: './ashworth.component.html',
  styleUrls: ['./ashworth.component.css']
})
export class AshworthComponent implements OnInit {

  n:number = 1;
  fields:any = Array.from({length: 1}, (x,i) => i);
  form: any;

  constructor() {
  }

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
