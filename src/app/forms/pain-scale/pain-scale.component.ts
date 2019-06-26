import { Component, OnInit } from '@angular/core';
import { FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-pain-scale',
  templateUrl: './pain-scale.component.html',
  styleUrls: ['./pain-scale.component.css']
})
export class PainScaleComponent implements OnInit {

  currentRate = 1;
  selected = 0;
  hovered = 0;
  readonly = false;
  ctrl = new FormControl(null, Validators.required);

  constructor() { }

  ngOnInit() {
  }

}
