import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: any;
  disableLogin: boolean = true;

  constructor(public router: Router) {}

  ngOnInit() {

    this.loginForm = new FormGroup({
        'cpf': new FormControl('', [Validators.required,
                                    Validators.minLength(11),
                                    Validators.maxLength(11)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    })

  }

  ngAfterViewInit() {
  }

  onLogin() {
    localStorage.setItem('isLoggedin', 'true');
  }

  onUpdateForm() {
    if(this.loginForm.valid) {
      this.disableLogin = false;
    }
  }
}
