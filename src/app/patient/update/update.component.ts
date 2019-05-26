import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateBrService } from 'angular-validate-br';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateForm: any;
  disableUpdate: boolean = true;

  constructor(private validateBrService: ValidateBrService) {}

  ngOnInit() {

    this.updateForm = new FormGroup({
      'nome': new FormControl('', [Validators.required]),
      'cpf': new FormControl('', [Validators.required,
                                    this.validateBrService.cpf,
                                    Validators.minLength(11),
                                    Validators.maxLength(11)]),
      'email': new FormControl('', [Validators.required,
                                    Validators.email]),
      'telefone': new FormControl('', [Validators.required])
    })
  }

  onUpdateForm() {
    if(this.updateForm.status === 'VALID') {
      // send data
      this.disableUpdate = false;
    }
  }

}
