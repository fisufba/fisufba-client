import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-kinetic',
  templateUrl: './kinetic.component.html',
  styleUrls: ['./kinetic.component.css']
})
export class KineticComponent implements OnInit {

  form: any;

  constructor() { }

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
  }

}
