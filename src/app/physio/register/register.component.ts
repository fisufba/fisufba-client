import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateBrService } from 'angular-validate-br';

import { AccountService, Account, AccountGroup } from '../../account.service';

@Component({
  selector: 'app-register-physio',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterPhysioComponent implements OnInit {

  registerForm: any;
  disableBtn: boolean = true;

  constructor(
    private validateBrService: ValidateBrService,
    private accountService: AccountService)
  {}

  ngOnInit() {
    this.registerForm = new FormGroup({
    	'name': new FormControl('', [Validators.required]),
      'cpf': new FormControl('', [Validators.required,
                                    this.validateBrService.cpf,
                                    Validators.minLength(11),
                                    Validators.maxLength(11)]),
      'phone' : new FormControl('', [Validators.required,
      															Validators.minLength(10),
      															Validators.maxLength(11)]),
      'email' : new FormControl('', [Validators.required,
     																Validators.email]),
      'password': new FormControl('', [Validators.required,
      																Validators.minLength(6)])
    })

  }
  
  onUpdateForm() {
    if(this.registerForm.valid) {
      this.disableBtn = false;
    }
  }

  onCadastrar() {
    const password = this.registerForm.get('password').value;

    // TODO where is the confirmation password?

    const account: Account = {
      id: -1,
      displayName: this.registerForm.get('name').value,
      cpf: this.registerForm.get('cpf').value,
      email: this.registerForm.get('email').value,
      phone: this.registerForm.get('phone').value,
      groups: [AccountGroup.Physiotherapist]
    };

    this.accountService.createAccount(account, password).subscribe(createdUserId => {
      if(createdUserId != null) {
        // TODO
        console.log(`Created account id ${createdUserId} for physiotherapist`);
      }
    });
  }
}
