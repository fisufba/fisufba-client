import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ashworth',
  templateUrl: './ashworth.component.html',
  styleUrls: ['./ashworth.component.css']
})
export class AshworthComponent implements OnInit {

  n:number = 1;
  fields:any = Array.from({length: 1}, (x,i) => i);
  constructor() {
  }

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
