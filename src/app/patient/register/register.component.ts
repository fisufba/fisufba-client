import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateBrService } from 'angular-validate-br';

import { AccountService, Account, AccountGroup } from '../../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterPatientComponent implements OnInit {

  signupForm: any;
  disableLogin: boolean = true;

  constructor(
    private validateBrService: ValidateBrService,
    private accountService: AccountService)
  {}

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

  onCadastrar() {
    const password = this.generateRandomPassword();
    const account: Account = {
      id: -1,
      displayName: this.signupForm.get('nome').value,
      cpf: this.signupForm.get('cpf').value,
      email: this.signupForm.get('email').value,
      phone: this.signupForm.get('telefone').value,
      groups: [AccountGroup.Patient],
    };
    this.accountService.createAccount(account, password).subscribe(createdUserId => {
      if(createdUserId != null) {
        // TODO
        console.log(`Created account id ${createdUserId} for patient`);
      }
    });
  }

  private generateRandomPassword(): string {
    const randomArray = crypto.getRandomValues(new Uint8Array(16));
    return btoa(String.fromCharCode.apply(null, randomArray));
  }
}
