import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manager-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateManagerComponent implements OnInit {
  updateForm = new FormGroup({
      'nome': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required,
                                    Validators.email]),
      'telefone': new FormControl('', [Validators.required])
    })
  disableUpdate: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onUpdateForm() {
    if(this.updateForm.status === 'VALID') {
      // send data
      this.disableUpdate = false;
    }
  }
}
