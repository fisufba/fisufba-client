import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tineti',
  templateUrl: './tineti.component.html',
  styleUrls: ['./tineti.component.css']
})
export class TinetiComponent implements OnInit {
  score:number = 0;

  constructor() { }

  ngOnInit() {
  }

  onUpdateForm() {
  }
}
