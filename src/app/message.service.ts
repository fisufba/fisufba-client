import { Injectable } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  add(message: string) {

    // TODO remove this after adding the pop-up component.
    console.log(`MessageService: ${message}`); 

    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  handleGenericError(error: HttpErrorResponse) {
    // FIXME currently the server message is very bad! We should reach
    //       an agreement regarding these messages.
    console.log("@@@@@@@@ " + JSON.stringify(error));
    const message = error.error.message;
    this.add(error.error.message);
  }
}
