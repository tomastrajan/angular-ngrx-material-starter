import { FormState, Form } from './form.model';
import { formReducer, initialState } from './form.reducer';
import {
  ActionFormUpdate,
  ActionFormReset
} from '@app/examples/form/form.actions';

describe('FormReducer', () => {
  const newForm: Form = {
    username: 'test',
    password: 'test',
    email: 'test@test.test',
    description: 'It is a test.',
    requestGift: true,
    age: 27,
    birthday: new Date(),
    rating: 10
  };

  it('should return the default state', () => {
    const action = {} as any;
    const state = formReducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should update the form', () => {
    const action = new ActionFormUpdate({ form: newForm });
    const state = formReducer(initialState, action);
    expect(state.form).toEqual(jasmine.objectContaining(newForm));
  });

  it('should reset the form', () => {
    const action = new ActionFormReset();
    const state = formReducer({ form: newForm }, action);
    expect(state).toBe(initialState);
  });
});
