import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-muscle-strength',
  templateUrl: './muscle-strength.component.html',
  styleUrls: ['./muscle-strength.component.css']
})
export class MuscleStrengthComponent implements OnInit {

  n:number = 1;
  fields:any = Array.from({length: 1}, (x,i) => i);
  constructor() { }

  ngOnInit() {
  }

  updateFields() {
    this.fields = Array.from({length: this.n}, (x,i) => i);
  }

  addElement() {
    this.n++;
    this.updateFields();
  }

}
