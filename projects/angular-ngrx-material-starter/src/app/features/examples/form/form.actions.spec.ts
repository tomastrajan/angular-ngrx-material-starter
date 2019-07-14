import { Form } from './form.model';
import { actionFormUpdate, actionFormReset } from './form.actions';

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
    const action = actionFormUpdate({
      form: testForm
    });
    expect(action.type).toEqual(actionFormUpdate.type);
    expect(action.form).toEqual(jasmine.objectContaining(testForm));
  });

  it('should create ActionFormReset action', () => {
    const action = actionFormReset();
    expect(action.type).toEqual(actionFormReset.type);
  });
});
