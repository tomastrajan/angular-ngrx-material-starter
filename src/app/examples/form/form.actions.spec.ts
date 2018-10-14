import { Form } from './form.model';
import {
  ActionFormUpdate,
  FormActionTypes,
  ActionFormReset
} from './form.actions';

describe('Form Actions', () => {
  it('should create ActionFormUpdate action', () => {
    const testForm: Form = {
      autosave: false,
      username: 'test',
      password: 'test',
      email: 'test@test.test',
      description: 'It is a test.',
      requestGift: true,
      birthday: new Date(),
      rating: 10
    };
    const action = new ActionFormUpdate({
      form: testForm
    });
    expect(action.type).toEqual(FormActionTypes.UPDATE);
    expect(action.payload.form).toEqual(jasmine.objectContaining(testForm));
  });

  it('should create ActionFormReset action', () => {
    const action = new ActionFormReset();
    expect(action.type).toEqual(FormActionTypes.RESET);
  });
});
