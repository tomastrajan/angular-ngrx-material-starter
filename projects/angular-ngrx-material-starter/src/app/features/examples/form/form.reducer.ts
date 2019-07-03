import { FormState, Form } from './form.model';
import { actionFormReset, actionFormUpdate } from './form.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: FormState = {
  form: {} as Form
};

const reducer = createReducer(
  initialState,
  on(actionFormUpdate, (state, { form }) => ({ ...state, form })),
  on(actionFormReset, () => initialState)
);

export function formReducer(state: FormState | undefined, action: Action) {
  return reducer(state, action);
}
