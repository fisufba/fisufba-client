import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient)
  {}

  isLoggedIn(): boolean {
    return this.getAuthToken() != null;
  }

  login(cpf: string, password: string): Observable<boolean> {
    const postBody = {'cpf': cpf, 'password': password};
    this.clearAuthToken();
    return this.post('/accounts/login', postBody).pipe(
      tap(payload => this.setAuthToken(payload['token'], payload['user_id'])),
      map(payload => true),
      catchError(error => {
        if(this.isHttpError(error, 403)) {
          this.messageService.addError("Usuário ou senha incorretos");
        } else {
          this.messageService.handleGenericError(error);
        }
        return of(false);
      })
    );
  }

  logout(): Observable<boolean> {
    const postBody = {'token': this.getAuthToken()};
    return this.post('/accounts/logout', postBody).pipe(
      tap(payload => this.clearAuthToken()),
      map(payload => true),
      catchError(this.errorHandler(false))
    );
  }

  get(path: string): Observable<Object> {
    const headers = this.getAuthHeader();
    return this.http.get(`${environment.apiUrl}${path}`, {headers: headers});
  }

  post(path: string, body: any): Observable<Object> {
    const headers = this.getAuthHeader();
    return this.http.post(`${environment.apiUrl}${path}`, body, {headers: headers});
  }

  patch(path: string, body: any): Observable<Object> {
    const headers = this.getAuthHeader();
    return this.http.patch(`${environment.apiUrl}${path}`, body, {headers: headers});
  }

  getAuthHeader(): HttpHeaders {
    const token = this.getAuthToken();
    if(token != null)
      return new HttpHeaders({'Authorization': `fisufba ${token}`});
    return new HttpHeaders();
  }

  private setAuthToken(token: string, userId: number) {
    try {
      localStorage.setItem('token', token);
      localStorage.setItem('user_id', userId.toString());
    } catch(err) {
      this.clearAuthToken();
      throw err;
    }
  }

  getUserId(): number | null {
    let userIdStr = localStorage.getItem('user_id');
    if(userIdStr != null)
      return parseInt(userIdStr);
    return null;
  }

  private getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  private clearAuthToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
  }

  private errorHandler<T>(result: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      this.messageService.handleGenericError(error);
      return of(result as T);
    };
  }

  private isHttpError(error: HttpErrorResponse, status: number) {
    return error.hasOwnProperty('status') && error.status == status;
  }
}
