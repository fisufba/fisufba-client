import { Injectable } from '@angular/core';

import { Form } from '../base.service';
import { StructureAndFunctionService } from '../structure-and-function.service';
import { LeftRightMeasure } from '../structure-and-function.service';
import { AuthService } from '../../auth/auth.service';
import { MessageService } from '../../message.service';

export interface AshworthMeasure {
  date: Date | null,
  type: LeftRightMeasure,
  target: string,
  value: number
}

export interface AshworthForm extends Form {
  measures: AshworthMeasure[]
}

@Injectable({
  providedIn: 'root'
})
export class AshworthService extends StructureAndFunctionService<AshworthForm> {

  constructor(messageService: MessageService, authService: AuthService) {
    super(messageService, authService);
  }

  protected getApiPath(): string {
    return "/forms/structureandfunction/ashworth_scale";
  }

  protected getFormName(): string {
    return "ashworth_scale";
  }

  protected convertPayloadToData(payload: Object): AshworthForm {
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

  protected convertDataToPayload(data: AshworthForm): Object {
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
