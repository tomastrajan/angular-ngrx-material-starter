import { Action } from '@ngrx/store';
import { Form } from './form.model';

export enum FormActionTypes {
  UPDATE = '[Form] Update',
  RESET = '[Form] Reset'
}

export class ActionFormUpdate implements Action {
  readonly type = FormActionTypes.UPDATE;

  constructor(readonly payload: { form: Form }) {}
}

export class ActionFormReset implements Action {
  readonly type = FormActionTypes.RESET;

  constructor() {}
}

export type FormActions = ActionFormUpdate | ActionFormReset;
