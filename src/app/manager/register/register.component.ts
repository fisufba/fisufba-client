import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateBrService } from 'angular-validate-br';

@Component({
  selector: 'app-register-manager',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterManagerComponent implements OnInit {

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
      'phone' : new FormControl('', [Validators.required,
                                     Validators.minLength(10),
                                     Validators.maxLength(11)]),
      'email': new FormControl('', [Validators.required,
                                    Validators.email]),
      'senha': new FormControl('', [Validators.required,
                                    Validators.minLength(6)]),

      'confirm-senha': new FormControl('', [Validators.required,
                                    Validators.minLength(6)])
    })
  }

  onUpdateForm() {
    if(this.signupForm.status === 'VALID') {
      // send data
      this.disableLogin = false;
    }
  }
}
