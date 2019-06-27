import { Injectable } from '@angular/core';

import { Form } from '../base.service';
import { StructureAndFunctionService } from '../structure-and-function.service';
import { LeftRightMeasure } from '../structure-and-function.service';
import { AuthService } from '../../auth/auth.service';
import { MessageService } from '../../message.service';

export interface PainScaleMeasure {
  date: Date | null,
  value: number // 0..10
}

export interface PainScaleForm extends Form {
  measures: PainScaleMeasure[]
}

@Injectable({
  providedIn: 'root'
})
export class PainScaleService extends StructureAndFunctionService<PainScaleForm> {

  constructor(messageService: MessageService, authService: AuthService) {
    super(messageService, authService);
  }

  protected getApiPath(): string {
    return "/forms/structureandfunction/pain_evaluation";
  }

  protected getFormName(): string {
    return "pain_evaluation";
  }

  protected convertPayloadToData(payload: Object): PainScaleForm {
    return {
      id: payload["id"],
      measures: payload["measures"].map(measure => {
        return {
          date: new Date(measure["date"]),
          value: new Number(measure["value"])
        };
      })
    }
  }

  protected convertDataToPayload(data: PainScaleForm): Object {
    return {
      measures: data.measures.map(measure => {
        return {
          date: measure.date? measure.date.toISOString().split('T')[0] : null,
          type: "Intensidade da Dor",
          sensory_type: null,
          target: null,
          value: measure.value.toString()
        };
      })
    }
  }
}
