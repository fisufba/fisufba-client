import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PiPeService, PiPeForm, PiPeMeasure, RespiratoryPressureMeasure } from './pi-pe.service';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-pi-pe',
  templateUrl: './pi-pe.component.html',
  styleUrls: ['./pi-pe.component.css']
})
export class PiPeComponent implements OnInit {

  form: any;
  disableForm: boolean = true;

  constructor(
    private service: PiPeService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private location: Location)
  {}

  ngOnInit() {
    this.form = new FormGroup({
      'piMax': new FormControl(),
      'peMax': new FormControl(),
    });
    this.form.valueChanges.subscribe(_ => this.onUpdateForm());
  }

  onUpdateForm() {
    this.disableForm = (this.form.status !== 'VALID');
  }

  onSave() {
    const userId = +this.route.snapshot.paramMap.get('id');

    const updateForm = ((serverForm) => {
      const formMeasurePiMax: PiPeMeasure = {
        date: null,
        type: RespiratoryPressureMeasure.MaximumInspirationPressure,
        value: +this.form.get('piMax').value
      };

      const formMeasurePeMax: PiPeMeasure = {
        date: null,
        type: RespiratoryPressureMeasure.MaximumExpirationPressure,
        value: +this.form.get('peMax').value
      };

      serverForm.measures.push(formMeasurePiMax);
      serverForm.measures.push(formMeasurePeMax);
    });

    const onFormUpdate = ((result) => {
      if(result == null) return;
      console.log(`added measures to form ${result}`);
      this.messageService.addSuccess("Medida acrescentada com sucesso");
    });

    this.service.getFormIds(userId).subscribe(formIds => {
      if(formIds == null)
        return;
      if(formIds.length == 0) {
        let form: PiPeForm = { id: -1, measures: [] };
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
}
