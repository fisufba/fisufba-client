import { Component, OnInit } from '@angular/core';
import { FormControl, Validators  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PainScaleService, PainScaleForm, PainScaleMeasure } from './pain-scale.service';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-pain-scale',
  templateUrl: './pain-scale.component.html',
  styleUrls: ['./pain-scale.component.css']
})
export class PainScaleComponent implements OnInit {

  currentRate = 1;
  selected = 0;
  hovered = 0;
  readonly = false;
  ctrl = new FormControl(null, Validators.required);
  disableForm: boolean = false;

  constructor(
    private service: PainScaleService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private location: Location)
  {}

  ngOnInit() {
  }

  onSave() {
    const userId = +this.route.snapshot.paramMap.get('id');

    const updateForm = ((serverForm) => {
      const formMeasure: PainScaleMeasure = {
        date: null,
        value: this.currentRate
      };
      serverForm.measures.push(formMeasure);
    });

    const onFormUpdate = ((result) => {
      if(result == null) return;
      console.log(`added measure to form ${result}`);
      this.messageService.addSuccess("Medida acrescentada com sucesso");
    });

    this.service.getFormIds(userId).subscribe(formIds => {
      if(formIds == null)
        return;
      if(formIds.length == 0) {
        let form: PainScaleForm = { id: -1, measures: [] };
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
