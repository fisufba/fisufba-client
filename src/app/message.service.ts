import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastr: ToastrService) { }

  addError(message: string) {
    this.toastr.error(message);
  }

  addSuccess(message: string) {
    this.toastr.success(message);
  }

  handleGenericError(error: HttpErrorResponse) {
    // FIXME currently the server message is very bad! We should reach
    //       an agreement regarding these messages.
    console.log("@@@@@@@@ " + JSON.stringify(error));
    const message = error.error.message;
    this.addError(error.error.message);
  }
}
