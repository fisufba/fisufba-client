import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SensorialService, SensorialForm, SensorialMeasure, SensoryType } from './sensorial.service';
import { LeftRightMeasure } from '../structure-and-function.service';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-sensorial',
  templateUrl: './sensorial.component.html',
  styleUrls: ['./sensorial.component.css']
})
export class SensorialComponent implements OnInit {

  form: any;
  disableForm: boolean = true;

  constructor(
    private service: SensorialService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private location: Location)
  {}

  ngOnInit() {
    this.form = new FormGroup({
      'toqueLeveRight': new FormControl(),
      'toqueLeveLeft': new FormControl(),
      'pressaoRight': new FormControl(),
      'pressaoLeft': new FormControl(),
      'picadasRight': new FormControl(),
      'picadasLeft': new FormControl(),
      'temperaturaRight': new FormControl(),
      'temperaturaLeft': new FormControl(),
      'locTatilRight': new FormControl(),
      'locTatilLeft': new FormControl(),
      'toqueBilateralSimul': new FormControl(),
      'propiocepcao': new FormControl(),
    });
    this.form.valueChanges.subscribe(_ => this.onUpdateForm());
  }

  onUpdateForm() {
    this.disableForm = (this.form.status !== 'VALID');
  }

  onSave() {
    const userId = +this.route.snapshot.paramMap.get('id');

    const updateForm = ((serverForm) => {

      serverForm.measures.push({
        date: null,
        type: LeftRightMeasure.LeftSide,
        sensoryType: SensoryType.LightTouch,
        target: "__target__",
        value: +this.form.get('toqueLeveLeft').value
      });

      serverForm.measures.push({
        date: null,
        type: LeftRightMeasure.RightSide,
        sensoryType: SensoryType.LightTouch,
        target: "__target__",
        value: +this.form.get('toqueLeveRight').value
      });

      serverForm.measures.push({
        date: null,
        type: LeftRightMeasure.LeftSide,
        sensoryType: SensoryType.Pressure,
        target: "__target__",
        value: +this.form.get('pressaoLeft').value
      });

      serverForm.measures.push({
        date: null,
        type: LeftRightMeasure.RightSide,
        sensoryType: SensoryType.Pressure,
        target: "__target__",
        value: +this.form.get('pressaoRight').value
      });

      serverForm.measures.push({
        date: null,
        type: LeftRightMeasure.LeftSide,
        sensoryType: SensoryType.Stings,
        target: "__target__",
        value: +this.form.get('picadasLeft').value
      });

      serverForm.measures.push({
        date: null,
        type: LeftRightMeasure.RightSide,
        sensoryType: SensoryType.Stings,
        target: "__target__",
        value: +this.form.get('picadasRight').value
      });

      serverForm.measures.push({
        date: null,
        type: LeftRightMeasure.LeftSide,
        sensoryType: SensoryType.Temperature,
        target: "__target__",
        value: +this.form.get('temperaturaLeft').value
      });

      serverForm.measures.push({
        date: null,
        type: LeftRightMeasure.RightSide,
        sensoryType: SensoryType.Temperature,
        target: "__target__",
        value: +this.form.get('temperaturaRight').value
      });

      serverForm.measures.push({
        date: null,
        type: LeftRightMeasure.LeftSide,
        sensoryType: SensoryType.TactileLocation,
        target: "__target__",
        value: +this.form.get('locTatilLeft').value
      });

      serverForm.measures.push({
        date: null,
        type: LeftRightMeasure.RightSide,
        sensoryType: SensoryType.TactileLocation,
        target: "__target__",
        value: +this.form.get('locTatilRight').value
      });

      serverForm.measures.push({
        date: null,
        type: null,
        sensoryType: SensoryType.SimultaneousBilateralTouch,
        target: "__target__",
        value: +this.form.get('toqueBilateralSimul').value
      });

      serverForm.measures.push({
        date: null,
        type: null,
        sensoryType: SensoryType.Proprioception,
        target: "__target__",
        value: +this.form.get('propiocepcao').value
      });
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
        let form: SensorialForm = { id: -1, measures: [] };
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
