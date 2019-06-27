import { Injectable } from '@angular/core';

import { Form } from '../base.service';
import { StructureAndFunctionService } from '../structure-and-function.service';
import { LeftRightMeasure } from '../structure-and-function.service';
import { AuthService } from '../../auth/auth.service';
import { MessageService } from '../../message.service';

export enum RespiratoryPressureMeasure {
  MaximumInspirationPressure = "PiMax",
  MaximumExpirationPressure = "PeMax"
}

export interface PiPeMeasure {
  date: Date | null,
  type: RespiratoryPressureMeasure,
  value: number
}

export interface PiPeForm extends Form {
  measures: PiPeMeasure[]
}

@Injectable({
  providedIn: 'root'
})
export class PiPeService extends StructureAndFunctionService<PiPeForm> {

  constructor(messageService: MessageService, authService: AuthService) {
    super(messageService, authService);
  }

  protected getApiPath(): string {
    return "/forms/structureandfunction/respiratory_muscle_strength";
  }

  protected getFormName(): string {
    return "respiratory_muscle_strength";
  }

  protected convertPayloadToData(payload: Object): PiPeForm {
    return {
      id: payload["id"],
      measures: payload["measures"].map(measure => {
        return {
          date: new Date(measure["date"]),
          type: measure["type"],
          value: new Number(measure["value"])
        };
      })
    }
  }

  protected convertDataToPayload(data: PiPeForm): Object {
    return {
      measures: data.measures.map(measure => {
        return {
          date: measure.date? measure.date.toISOString().split('T')[0] : null,
          type: measure.type,
          sensory_type: null,
          target: null,
          value: measure.value.toString()
        };
      })
    }
  }
}
