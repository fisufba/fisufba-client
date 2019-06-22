import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goniometry',
  templateUrl: './goniometry.component.html',
  styleUrls: ['./goniometry.component.css']
})
export class GoniometryComponent implements OnInit {
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
