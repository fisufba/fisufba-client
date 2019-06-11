import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { FormService, Form } from '../base.service';
import { AuthService } from '../../auth/auth.service';
import { MessageService } from '../../message.service';

export enum CivilStatus {
  Single = "Solteiro(a)",
  Married = "Casado(a)",
  Divorced = "Divorciado(a)",
  Widowed = "Viúvo(a)"
}

export enum LivesWithStatus {
  Alone = "Sozinho(a)",
  Relatives = "Familiares",
  Friends = "Amigos",
  Spouse = "Cônjuge"
}

export enum Education {
  Illiterate = "Analfabeto(a)",
  Primary = "Primeiro Grau",
  Secondary = "Segundo Grau",
  Tertiary = "Superior/Pós-graduado(a)"
}

export enum OccupationalStatus {
  Student = "Estudante",
  Unemployed = "Desempregado(a)",
  Employed = "Empregado(a)",
  AwayForHealth = "Afastado(a) por problemas de saúde",
  Retired = "Aposentado(a)"
}

export interface SociodemographicForm extends Form {
  civilStatus: CivilStatus;
  livesWithStatus: LivesWithStatus;
  education: Education;
  occupationalStatus: OccupationalStatus;
  currentJob: string | null;
  lastJob: string | null;
  isSick: boolean;
  diseases: string[];
  isMedicated: boolean;
  medicines: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SociodemographicService extends FormService<SociodemographicForm> {

  constructor(messageService: MessageService, authService: AuthService) {
    super(messageService, authService);
  }

  protected getApiPath(): string {
    return '/forms/sociodemographicevaluation';
  }

  protected getFormName(): string {
    return 'sociodemographic_evaluation';
  }

  protected convertPayloadToData(payload: Object): SociodemographicForm {
    return {
      id: payload["id"],
      civilStatus: payload["civil_status"],
      livesWithStatus: payload["lives_with_status"],
      education: payload["education"],
      occupationalStatus: payload["occupational_status"],
      currentJob: payload["current_job"],
      lastJob: payload["last_job"],
      isSick: payload["is_sick"],
      diseases: payload["diseases"],
      isMedicated: payload["is_medicated"],
      medicines: payload["medicines"],
    };
  }

  protected convertDataToPayload(data: SociodemographicForm): Object {
    return {
      civil_status: data.civilStatus,
      lives_with_status: data.livesWithStatus,
      education: data.education,
      occupational_status: data.occupationalStatus,
      current_job: data.currentJob,
      last_job: data.lastJob,
      is_sick: data.isSick,
      diseases: data.diseases,
      is_medicated: data.isMedicated,
      medicines: data.medicines,
    }
  }
}
