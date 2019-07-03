import { Form } from './form.model';
import { formReducer, initialState } from './form.reducer';
import { actionFormReset, actionFormUpdate } from './form.actions';

describe('FormReducer', () => {
  const form: Form = {
    autosave: false,
    username: 'test',
    password: 'test',
    email: 'test@test.test',
    description: 'It is a test.',
    requestGift: true,
    birthday: new Date(),
    rating: 10
  };

  it('should return the default state', () => {
    const action = {} as any;
    const state = formReducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should update the form', () => {
    const action = actionFormUpdate({
      form: { ...form, username: 'updated' }
    });
    const state = formReducer(initialState, action);
    expect(state.form.username).toBe('updated');
  });

  it('should reset the form', () => {
    const action = actionFormReset();
    const state = formReducer(undefined, action);
    expect(state).toEqual(initialState);
  });
});
