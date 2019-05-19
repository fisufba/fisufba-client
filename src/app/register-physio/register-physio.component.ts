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
  disableBtn: boolean = true;

  constructor(private validateBrService: ValidateBrService) {}

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
}