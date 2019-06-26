import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tineti',
  templateUrl: './tineti.component.html',
  styleUrls: ['./tineti.component.css']
})
export class TinetiComponent implements OnInit {
  score:number = 0;
  form: any;
  width: number = 0;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
     'equilibrioSentado': new FormControl(),
     'levanta': new FormControl(),
     'tentativa': new FormControl(),
     'equilibrioImediato': new FormControl(),
     'equilibrio': new FormControl(),
     'desequilibrio': new FormControl(),
     'olhosFechados': new FormControl(),
     'girar': new FormControl(),
     'sentar': new FormControl(),
    });
  }

  onUpdateForm() {
      console.log(this.score)
      this.score = 0;
      for( let value in this.form.value) {
          this.score += Number(this.form.value[value]);
      }
      this.width = (100*this.score)/16;
  }
}
