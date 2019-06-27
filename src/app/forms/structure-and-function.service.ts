import { FormService, Form } from './base.service';
import { AuthService } from '../auth/auth.service';
import { MessageService } from '../message.service';

export enum LeftRightMeasure {
  LeftSide = "E",
  RightSide = "D"
}

export abstract class StructureAndFunctionService<FormType extends Form> 
  extends FormService<FormType> {

  constructor(
    protected messageService: MessageService,
    protected authService: AuthService) {
    super(messageService, authService);
  }
}
