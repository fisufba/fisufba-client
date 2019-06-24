import { Injectable } from '@angular/core';

import { Form } from '../base.service';
import { StructureAndFunctionService } from '../structure-and-function.service';
import { LeftRightMeasure } from '../structure-and-function.service';
import { AuthService } from '../../auth/auth.service';
import { MessageService } from '../../message.service';

export interface MuscleStrengthMeasure {
  date: Date | null,
  type: LeftRightMeasure,
  target: string,
  value: number
}

export interface MuscleStrengthForm extends Form {
  measures: MuscleStrengthMeasure[]
}

@Injectable({
  providedIn: 'root'
})
export class MuscleStrengthService extends StructureAndFunctionService<MuscleStrengthForm> {

  constructor(messageService: MessageService, authService: AuthService) {
    super(messageService, authService);
  }

  protected getApiPath(): string {
    return "/forms/structureandfunction/muscle_strength";
  }

  protected getFormName(): string {
    return "muscle_strength";
  }

  protected convertPayloadToData(payload: Object): MuscleStrengthForm {
    return {
      id: payload["id"],
      measures: payload["measures"].map(measure => {
        return {
          date: new Date(measure["date"]),
          type: measure["type"],
          target: measure["target"],
          value: new Number(measure["value"])
        };
      })
    }
  }

  protected convertDataToPayload(data: MuscleStrengthForm): Object {
    return {
      measures: data.measures.map(measure => {
        return {
          date: measure.date.toISOString().split('T')[0],
          type: measure.type,
          sensory_type: null,
          target: measure.target,
          value: measure.toString()
        };
      })
    }
  }
}
