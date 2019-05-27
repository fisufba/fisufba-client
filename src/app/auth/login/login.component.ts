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
    const cpf = this.maskCpf(this.loginForm.get('cpf').value);
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

  private maskCpf(cpf: string): string {
    const comp1 = cpf.substring(0, 3);
    const comp2 = cpf.substring(3, 6);
    const comp3 = cpf.substring(6, 9);
    const comp4 = cpf.substring(9, 11);
    return `${comp1}.${comp2}.${comp3}-${comp4}`;
  }
}
