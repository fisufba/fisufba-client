import { Injectable } from '@angular/core';

import { Form } from '../base.service';
import { StructureAndFunctionService } from '../structure-and-function.service';
import { LeftRightMeasure } from '../structure-and-function.service';
import { AuthService } from '../../auth/auth.service';
import { MessageService } from '../../message.service';

export enum SensoryType {
  LightTouch = "Toque Leve",
  Pressure = "Pressão",
  Stings = "Picadas",
  Temperature = "Temperatura",
  TactileLocation = "Localização Tática",
  SimultaneousBilateralTouch = "Toque Bilateral Simultâneo",
  Proprioception = "Propriocepção"
}

export interface SensorialMeasure {
  date: Date | null,
  type: LeftRightMeasure | null,
  sensoryType: SensoryType,
  target: string,
  value: number
}

export interface SensorialForm extends Form {
  measures: SensorialMeasure[]
}

@Injectable({
  providedIn: 'root'
})
export class SensorialService extends StructureAndFunctionService<SensorialForm> {

  constructor(messageService: MessageService, authService: AuthService) {
    super(messageService, authService);
  }

  protected getApiPath(): string {
    return "/forms/structureandfunction/sensory_evaluation";
  }

  protected getFormName(): string {
    return "sensory_evaluation";
  }

  protected convertPayloadToData(payload: Object): SensorialForm {
    return {
      id: payload["id"],
      measures: payload["measures"].map(measure => {
        return {
          date: new Date(measure["date"]),
          type: measure["type"],
          sensoryType: measure["sensory_type"],
          target: measure["target"],
          value: new Number(measure["value"])
        };
      })
    }
  }

  protected convertDataToPayload(data: SensorialForm): Object {
    return {
      measures: data.measures.map(measure => {
        return {
          date: measure.date.toISOString().split('T')[0],
          type: measure.type,
          sensory_type: measure.sensoryType,
          target: measure.target,
          value: measure.toString()
        };
      })
    }
  }
}
