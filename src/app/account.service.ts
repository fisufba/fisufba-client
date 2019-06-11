import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { AuthService } from './auth/auth.service';
import { MessageService } from './message.service';

export enum AccountGroup {
  Admin = "admin",
  Attendant = "attendant",
  Physiotherapist = "physiotherapist",
  Patient = "patient",
}

export interface Account {
  id: number;
  displayName: string;
  cpf: string; // cpf without mask
  phone: string; // phone without mask
  email: string;
  groups?: AccountGroup[];
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private messageService: MessageService,
    private authService: AuthService)
  {}

  getAccount(userId: number): Observable<Account | null> {
    return this.authService.get(`/accounts/${userId}`).pipe(
      map(payload => this.payloadToAccountData(payload["user"])),
      catchError(this.errorHandler(null))
    );
  }

  createAccount(account: Account, password: string): Observable<number | null> {
    const userId = account.id;
    const body = this.accountDataToPayload(account, password);
    return this.authService.post('/accounts', body).pipe(
      map(payload => payload["user_id"]),
      catchError(this.errorHandler(null))
    );
  }

  updateAccount(account: Account): Observable<number | null> {
    const userId = account.id;
    const body = this.accountDataToPayload(account, undefined);
    return this.authService.patch(`/accounts/${userId}`, body).pipe(
      map(payload => payload["user_id"]),
      catchError(this.errorHandler(null))
    );
  }

  private payloadToAccountData(payload: Object): Account {
    return {
      id: payload['id'],
      displayName: payload['display_name'],
      cpf: payload['cpf'],
      phone: payload['phone'].replace(/\(|\)|\.|\-/g, ''),
      email: payload['email'],
      groups: payload['groups']
    };
  }

  private accountDataToPayload(account: Account, 
                               password: string | undefined): Object {
    return {
      id: account.id,
      display_name: account.displayName,
      password: password,
      cpf: account.cpf,
      phone: account.phone,
      email: account.email,
      user_group_names: account.groups,
    }
  }

  private errorHandler<T>(result: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      this.messageService.handleGenericError(error);
      return of(result as T);
    };
  }
}

