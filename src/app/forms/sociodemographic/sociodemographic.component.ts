import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SociodemographicService, SociodemographicForm, CivilStatus, LivesWithStatus, Education, OccupationalStatus } from './sociodemographic.service';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-sociodemographic',
  templateUrl: './sociodemographic.component.html',
  styleUrls: ['./sociodemographic.component.css']
})
export class SociodemographicComponent implements OnInit {

  form: any;
  disableForm: boolean = true;

  constructor(
    private service: SociodemographicService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'civilSatus': new FormControl('', [Validators.required]),
      'habitationStatus': new FormControl('', [Validators.required]),
      'education': new FormControl('', [Validators.required]),
      'ocupationalStatus': new FormControl('', [Validators.required]),
      'currentJob': new FormControl('', []),
      'lastJob': new FormControl('', []),
      'sick': new FormControl('', []),
      'medicine': new FormControl('', [])
    });
    this.form.valueChanges.subscribe(_ => this.onUpdateForm());
  }

  onUpdateForm() {
    this.disableForm = (this.form.status !== 'VALID');
  }

  onSave() {
    const userId = +this.route.snapshot.paramMap.get('id');
    const diseases = ["A"];
    const medicines = ["A"];
    const form: SociodemographicForm = {
      id: -1,
      civilStatus: this.form.get('civilSatus').value as CivilStatus,
      livesWithStatus: this.form.get('habitationStatus').value as LivesWithStatus,
      education: this.form.get('education').value as Education,
      occupationalStatus: this.form.get('ocupationalStatus').value as OccupationalStatus,
      currentJob: this.form.get('currentJob').value || null,
      lastJob: this.form.get('currentJob').value || null,
      isSick: !!this.form.get('sick').value,
      diseases: diseases,
      isMedicated: !!this.form.get('medicine').value,
      medicines: medicines
    }
    this.service.createForm(userId, form).subscribe(result => {
      if(result == null) return;
      console.log(`created form ${result}`);
      this.messageService.addSuccess("Formulário criado com sucesso");
    });
  }

}
