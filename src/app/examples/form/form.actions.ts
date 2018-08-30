import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Form } from './form.model';

export enum FormActionTypes {
  RETRIEVE = '[Form] Retrieve',
  RETRIEVE_SUCCESS = '[Form] Retrieve Success',
  RETRIEVE_ERROR = '[Form] Retrieve Error'
}

export class ActionFormRetrieve implements Action {
  readonly type = FormActionTypes.RETRIEVE;

  constructor(readonly payload: any) {}
}

export class ActionFormRetrieveSuccess implements Action {
  readonly type = FormActionTypes.RETRIEVE_SUCCESS;

  constructor(readonly payload: { form: any }) {}
}

export class ActionFormRetrieveError implements Action {
  readonly type = FormActionTypes.RETRIEVE_ERROR;

  constructor(readonly payload: { error: Observable<never> }) {}
}

export type FormActions =
  | ActionFormRetrieve
  | ActionFormRetrieveSuccess
  | ActionFormRetrieveError;
