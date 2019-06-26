import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-walk-test',
  templateUrl: './walk-test.component.html',
  styleUrls: ['./walk-test.component.css']
})
export class WalkTestComponent implements OnInit {

  form: any;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'borgBefore': new FormControl(),
      'fcBefore': new FormControl(),
      'pasBefore': new FormControl(),
      'spO2Before': new FormControl(),
      'frBefore': new FormControl(),
      'distBefore': new FormControl(),
      'borgFinal': new FormControl(),
      'fcFinal': new FormControl(),
      'pasFinal': new FormControl(),
      'spO2Final': new FormControl(),
      'frFinal': new FormControl(),
      'distFinal': new FormControl(),
      'borgFive': new FormControl(),
      'fcFive': new FormControl(),
      'pasFive': new FormControl(),
      'spO2Five': new FormControl(),
      'frFive': new FormControl(),
      'distFive': new FormControl(),
      'height': new FormControl(),
      'age': new FormControl(),
      'weight': new FormControl()
    });
  }

}
