import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateBrService } from 'angular-validate-br';

@Component({
  selector: 'app-register',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {

  signupForm: any;
  disableLogin: boolean = true;

  constructor(private validateBrService: ValidateBrService) {}

  ngOnInit() {

    this.signupForm = new FormGroup({
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
    if(this.signupForm.status === 'VALID') {
      // send data
      this.disableLogin = false;
    }
  }
}
