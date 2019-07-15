import { createAction, props } from '@ngrx/store';
import { Form } from './form.model';

export const actionFormUpdate = createAction(
  '[Form] Update',
  props<{ form: Form }>()
);

export const actionFormReset = createAction('[Form] Reset');
