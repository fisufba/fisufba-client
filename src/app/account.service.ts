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
  groups: AccountGroup[];
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private messageService: MessageService,
    private authService: AuthService)
  {}

  getAccountInfo(userId: number): Observable<Account | null> {
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

  private payloadToAccountData(payload: Object): Account {
    return {
      id: payload['id'],
      displayName: payload['display_name'],
      cpf: payload['cpf'].replace(/\.|\-/g, ''),
      phone: payload['phone'].replace(/\(|\)|\.|\-/g, ''),
      email: payload['email'],
      groups: payload['groups']
    };
  }

  private accountDataToPayload(account: Account, password: string): Object {
    return {
      id: account.id,
      display_name: account.displayName,
      password: password,
      cpf: this.maskCpf(account.cpf),
      phone: account.phone,
      email: account.email,
      user_group_names: account.groups,
    }
  }





  // TODO the following functions should probably be moved to somewhere else


  private maskCpf(cpf: string): string {
    const comp1 = cpf.substring(0, 3);
    const comp2 = cpf.substring(3, 6);
    const comp3 = cpf.substring(6, 9);
    const comp4 = cpf.substring(9, 11);
    return `${comp1}.${comp2}.${comp3}-${comp4}`;
  }


  private errorHandler<T>(result: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      this.handleGenericError(error);
      return of(result as T);
    };
  }

  private handleGenericError<T>(error: HttpErrorResponse) {
      // FIXME currently the server message is very bad! We should reach
      //       an agreement regarding these messages.
      console.log("@@@@@@@@ " + JSON.stringify(error));
      const message = error.error.message;
      this.messageService.add(error.error.message);
  }
}

