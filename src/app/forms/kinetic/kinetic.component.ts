import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { KineticService, KineticForm, StructureAndFunction, ActivityAndParticipation } from './kinetic.service';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-kinetic',
  templateUrl: './kinetic.component.html',
  styleUrls: ['./kinetic.component.css']
})
export class KineticComponent implements OnInit {

  form: any;
  disableForm: boolean = true;

  constructor(
    private service: KineticService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'clinicalDiagnosis': new FormControl(),
      'mainComplaint': new FormControl(),
      'functionalComplaint': new FormControl(),
      'clinicalHistory': new FormControl(),
      'functionalHistory': new FormControl(),
      'structureFunction': new FormControl(),
      'activityParticipation': new FormControl(),
      'functionalPhysicalResult': new FormControl(),
      'complementaryResult': new FormControl(),
      'disability': new FormControl(),
      'activityLimitation': new FormControl(),
      'participationRestriction': new FormControl(),
      'ambientalFactor': new FormControl(),
      'functionalGoals': new FormControl(),
      'therapeuticalPlan': new FormControl(),
      'date': new FormControl(),
    });
    this.form.valueChanges.subscribe(_ => this.onUpdateForm());
  }

  onUpdateForm() {
    this.disableForm = (this.form.status !== 'VALID');
  }

  onSave() {
    const userId = +this.route.snapshot.paramMap.get('id');
    const form: KineticForm = {
      id: -1,
      clinicDiagnostic: this.form.get('clinicalDiagnosis').value,
      mainComplaint: this.form.get('mainComplaint').value,
      functionalComplaint: this.form.get('functionalComplaint').value,
      clinicalHistory: this.form.get('clinicalHistory').value,
      functionalHistory: this.form.get('functionalHistory').value,
      structureAndFunction: [StructureAndFunction.Goniometry],
      activityAndParticipation: [ActivityAndParticipation.MarchEvaluation],
      physicalFunctionalTestsResults: this.form.get('functionalPhysicalResult').value,
      complementaryExamsResults: this.form.get('complementaryResult').value,
      deficiencyDiagnosis: this.form.get('disability').value,
      activityLimitationDiagnosis: this.form.get('activityLimitation').value,
      participationRestrictionDiagnosis: this.form.get('participationRestriction').value,
      environmentFactorsDiagnosis: this.form.get('ambientalFactor').value,
      functionalObjectivesDiagnosis: [this.form.get('functionalGoals').value],
      therapeuticPlanDiagnosis: [this.form.get('therapeuticalPlan').value],
      reevaluationDates: [new Date(this.form.get('date').value)],
      academicAssessor: null,
      preceptorAssessor: null
    };
    this.service.createForm(userId, form).subscribe(result => {
      if(result == null) return;
      console.log(`created form ${result}`);
      this.messageService.addSuccess("Formulário criado com sucesso");
    });
  }
}
