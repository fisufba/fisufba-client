import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AshworthService, AshworthForm, AshworthMeasure } from './ashworth.service';
import { LeftRightMeasure } from '../structure-and-function.service';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-ashworth',
  templateUrl: './ashworth.component.html',
  styleUrls: ['./ashworth.component.css']
})
export class AshworthComponent implements OnInit {

  n:number = 1;
  fields:any = Array.from({length: 1}, (x,i) => i);
  form: any;
  disableForm: boolean = true;

  constructor(
    private service: AshworthService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private location: Location)
  {}

  ngOnInit() {
    this.form = new FormGroup({
      'evaluatedMuscle': new FormControl(),
      'left': new FormControl(),
      'right': new FormControl(),
    });
    this.form.valueChanges.subscribe(_ => this.onUpdateForm());
  }

  onUpdateForm() {
    this.disableForm = (this.form.status !== 'VALID');
  }

  onSave() {
    const userId = +this.route.snapshot.paramMap.get('id');

    const updateForm = ((serverForm) => {
      const formMeasureLeft: AshworthMeasure = {
        date: null,
        type: LeftRightMeasure.LeftSide,
        target: this.form.get('evaluatedMuscle').value,
        value: +this.form.get('left').value
      };

      const formMeasureRight: AshworthMeasure = {
        date: null,
        type: LeftRightMeasure.RightSide,
        target: this.form.get('evaluatedMuscle').value,
        value: +this.form.get('right').value
      };

      serverForm.measures.push(formMeasureLeft);
      serverForm.measures.push(formMeasureRight);
    });

    const onFormUpdate = ((result) => {
      if(result == null) return;
      console.log(`added measures to form ${result}`);
      this.messageService.addSuccess("Formulário criado com sucesso");
    });

    this.service.getFormIds(userId).subscribe(formIds => {
      if(formIds == null)
        return;
      if(formIds.length == 0) {
        let form: AshworthForm = { id: -1, measures: [] };
        updateForm(form);
        this.service.createForm(userId, form).subscribe(onFormUpdate);
      } else {
        this.service.getForm(formIds[0]).subscribe(form => {
          if(form == null) return;
          updateForm(form);
          this.service.updateForm(form).subscribe(onFormUpdate);
        });
      }
    });
  }

  updateFields() {
    this.fields = Array.from({length: this.n}, (x,i) => i);
  }

  addElement() {
    this.n++;
    this.updateFields();
  }

}
