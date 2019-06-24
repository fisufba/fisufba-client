import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateBrService } from 'angular-validate-br';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: any;
  disableLogin: boolean = true;

  constructor(
    public router: Router,
    private validateBrService: ValidateBrService,
    private authService: AuthService) {}

  ngOnInit() {

    this.loginForm = new FormGroup({
      'cpf': new FormControl('', [Validators.required,
                                    this.validateBrService.cpf,
                                    Validators.minLength(11),
                                    Validators.maxLength(11)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    });

  }

  ngAfterViewInit() {
  }

  onLogin() {
    const cpf = this.loginForm.get('cpf').value;
    const password = this.loginForm.get('password').value;
    this.authService.login(cpf, password).subscribe(hasLoggedIn => {
      if(hasLoggedIn)
        this.router.navigateByUrl('home');
    });
  }

  onUpdateForm() {
    if(this.loginForm.valid) {
      this.disableLogin = false;
    }
  }
}
