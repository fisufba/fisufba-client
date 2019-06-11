import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { MessageService } from '../message.service';

export interface Form {
  id: number;
}

export abstract class FormService<FormType extends Form> {

  constructor(
    protected messageService: MessageService,
    protected authService: AuthService)
  {}

  /// Obtains the API path to this form.
  protected abstract getApiPath(): string;

  /// Obtains the name of the form in the /accounts/:user_id API page.
  protected abstract getFormName(): string;

  /// Converts JSON payload from the API into a Form object.
  protected abstract convertPayloadToData(payload: Object): FormType;

  /// Converts a Form object into a JSON payload for the API.
  protected abstract convertDataToPayload(data: FormType): Object;

  getFormIds(userId: number): Observable<number[] | null> {
    return this.authService.get(`/accounts/${userId}`).pipe(
      map(payload => {
        const formName = this.getFormName();
        const forms = payload["user"]["forms"][formName];
        if(forms === null)
          return [] as number[];
        else if(typeof forms == "number")
          return [forms] as number[];
        else
          return forms;
      }),
      catchError(this.errorHandler(null))
    );
  }

  getForm(formId: number): Observable<FormType | null> {
    const apiPath = this.getApiPath();
    return this.authService.get(`${apiPath}/${formId}`).pipe(
      map(payload => this.convertPayloadToData(payload["form"])),
      catchError(this.errorHandler(null))
    );
  }

  createForm(userId: number, form: FormType): Observable<number | null> {
    const apiPath = this.getApiPath();

    let body = this.convertDataToPayload(form);
    body["user_id"] = userId;
    delete body["id"];

    return this.authService.post(`${apiPath}`, body).pipe(
      map(payload => payload["form_id"]),
      catchError(this.errorHandler(null))
    );
  }

  updateForm(form: FormType): Observable<number | null> {
    const apiPath = this.getApiPath();
    const formId = form.id;
    const body = this.convertDataToPayload(form);
    return this.authService.patch(`${apiPath}/${formId}`, body).pipe(
      map(payload => payload["form_id"]),
      catchError(this.errorHandler(null))
    );
  }

  private errorHandler<T>(result: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      this.messageService.handleGenericError(error);
      return of(result as T);
    };
  }
}
