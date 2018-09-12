import { FormState, Form } from './form.model';
import { FormActions, FormActionTypes } from './form.actions';

export const initialState: FormState = {
  form: {} as Form
};

export function formReducer(
  state: FormState = initialState,
  action: FormActions
): FormState {
  switch (action.type) {
    case FormActionTypes.UPDATE:
      return {
        ...state,
        form: action.payload.form
      };
    case FormActionTypes.RESET:
      return {
        ...state,
        form: initialState.form
      };

    default:
      return state;
  }
}
