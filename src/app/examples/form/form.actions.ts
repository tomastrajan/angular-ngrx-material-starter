import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Form, FormState } from './form.model';

export enum FormActionTypes {
  SAVE = '[Form] Save',
  UPDATE = '[Form] Update',
  RETRIEVE = '[Form] Retrieve'
}

export class ActionFormSave implements Action {
  readonly type = FormActionTypes.SAVE;

  constructor(readonly payload: { form: FormState }) {}
}

export class ActionFormUpdate implements Action {
  readonly type = FormActionTypes.UPDATE;

  constructor(readonly payload: { form: any }) {}
}

export class ActionFormRetrieve implements Action {
  readonly type = FormActionTypes.RETRIEVE;

  constructor(readonly payload: { form: Form }) {}
}
export type FormActions =
  | ActionFormSave
  | ActionFormUpdate
  | ActionFormRetrieve;
