import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateBrService } from 'angular-validate-br';

@Component({
  selector: 'app-register-physio',
  templateUrl: './register-physio.component.html',
  styleUrls: ['./register-physio.component.css']
})
export class RegisterPhysioComponent implements OnInit {

  registerForm: any;
  //disableLogin: boolean = true;

  constructor(private validateBrService: ValidateBrService) {}

  ngOnInit() {

    this.loginForm = new FormGroup({
    	'name': new FormControl('', [Validators.required]),
      'cpf': new FormControl('', [Validators.required,
                                    this.validateBrService.cpf,
                                    Validators.minLength(11),
                                    Validators.maxLength(11)]),
      'phone' : new FormControl('', [Validators.required,
      															Validators.minLength(8),
      															Validators.maxLength(11)]),
      'email' : new FormControl('', [Validators.required,
     																Validators.email]),
      'password': new FormControl('', [Validators.required,
      																Validators.minLength(6)])
    })

  }

}
