import { createAction, props } from '@ngrx/store';
import { Form } from './form.model';

export enum FormActionTypes {
  UPDATE = '[Form] Update',
  RESET = '[Form] Reset'
}

export const actionFormUpdate = createAction(
  FormActionTypes.UPDATE,
  props<{ form: Form }>()
);

export const actionFormReset = createAction(FormActionTypes.RESET);
