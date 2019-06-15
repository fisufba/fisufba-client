import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { FormService, Form } from '../base.service';
import { AuthService } from '../../auth/auth.service';
import { MessageService } from '../../message.service';

export enum Gender {
  Masculine = "Masculino",
  Feminine = "Feminino",
}

export interface PatientForm extends Form {
  gender: Gender;
  birthday: Date;
  acquaintancePhone: string;
  address: string;
  neighborhood: string;
  city: string;
  country: string;
}

@Injectable({
  providedIn: 'root'
})
export class PatientService extends FormService<PatientForm> {

  constructor(messageService: MessageService, authService: AuthService) {
    super(messageService, authService);
  }

  protected getApiPath(): string {
    return '/forms/patientinformation';
  }

  protected getFormName(): string {
    return 'patient_information';
  }

  protected convertPayloadToData(payload: Object): PatientForm {
    return {
      id: payload["id"],
      gender: payload["gender"],
      birthday: new Date(payload["birthday"]),
      acquaintancePhone: payload["acquaintance_phone"],
      address: payload["address"],
      neighborhood: payload["neighborhood"],
      city: payload["city"],
      country: payload["country"]
    };
  }

  protected convertDataToPayload(data: PatientForm): Object {
    return {
      gender: data.gender,
      birthday: data.birthday.toISOString().split('T')[0],
      acquaintance_phone: data.acquaintancePhone,
      address: data.address,
      neighborhood: data.neighborhood,
      city: data.city,
      country: data.country
    }
  }
}
