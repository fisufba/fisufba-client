import { Injectable } from '@angular/core';

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
}
