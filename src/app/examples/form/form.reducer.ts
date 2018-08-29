import { FormState, Form } from './form.model';
import { FormActions, FormActionTypes } from './form.actions';

export const initialState: FormState = {
  loading: false,
  form: {} as Form
};

export function formReducer(
  state: FormState = initialState,
  action: FormActions
): FormState {
  switch (action.type) {
    case FormActionTypes.RETRIEVE:
      return {
        ...state,
        loading: true,
        form: action.payload,
        error: null
      };

    case FormActionTypes.RETRIEVE_SUCCESS:
      return {
        ...state,
        loading: false,
        form: action.payload.form,
        error: null
      };

    case FormActionTypes.RETRIEVE_ERROR:
      return {
        ...state,
        loading: false,
        form: null,
        error: action.payload.error
      };

    default:
      return state;
  }
}
