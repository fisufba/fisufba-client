import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateBrService } from 'angular-validate-br';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: any;
  disableLogin: boolean = true;

  constructor(public router: Router,
              private validateBrService: ValidateBrService) {}

  ngOnInit() {

    this.loginForm = new FormGroup({
      'cpf': new FormControl('', [Validators.required,
                                    this.validateBrService.cpf,
                                    Validators.minLength(11),
                                    Validators.maxLength(11)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    })

  }

  ngAfterViewInit() {
  }

  onLogin() {
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigateByUrl('/');
  }

  onUpdateForm() {
    if(this.loginForm.valid) {
      this.disableLogin = false;
    }
  }
}
