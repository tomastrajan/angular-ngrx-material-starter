import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import {
  createComponent,
  RenderResult
} from '@angular-extensions/testing-library';

import { MockStore, TestingModule } from '@testing/utils';
import { NotificationService } from '@app/core';

import { State } from '../../examples.state';
import { FormState } from '../form.model';
import { FormComponent } from './form.component';
import { initialState } from '../form.reducer';
import { ActionFormUpdate } from '../form.actions';

describe('FormComponent', () => {
  let store: MockStore<State>;
  let component: RenderResult;
  let dispatchSpy: jasmine.Spy;

  beforeEach(async () => {
    component = await createComponent<FormComponent>(
      '<anms-form></anms-form>',
      {
        declarations: [FormComponent],
        imports: [TestingModule],
        providers: [NotificationService],
        detectChanges: false
      }
    );

    store = TestBed.get(Store);
    store.setState(createState(initialState));
    dispatchSpy = spyOn(store, 'dispatch');

    component.fixture.detectChanges();
  });

  it('should submit when form is valid', async () => {
    component.input(
      component.getByLabelText('anms.examples.form.placeholder1'),
      {
        target: {
          value: '@tim_deschryver'
        }
      }
    );
    component.input(
      component.getByLabelText('anms.examples.form.placeholder2'),
      {
        target: {
          value: 'mysuperawesomeandsecurepassword'
        }
      }
    );
    component.input(
      component.getByLabelText('anms.examples.form.placeholder3'),
      {
        target: {
          value: 'foo@bar.baz'
        }
      }
    );
    component.input(
      component.getByLabelText('anms.examples.form.placeholder5'),
      {
        target: {
          value: '1991-12-31'
        }
      }
    );
    component.input(
      component.getByLabelText('anms.examples.form.placeholder4'),
      {
        target: {
          value: 'no description needed here'
        }
      }
    );
    component.click(component.getByLabelText('anms.examples.form.text1'));
    component.click(component.getByText('anms.examples.form.send'));
    const { type, payload } = new ActionFormUpdate({
      form: {
        autosave: false,
        username: '@tim_deschryver',
        password: 'mysuperawesomeandsecurepassword',
        email: 'foo@bar.baz',
        description: 'no description needed here',
        requestGift: true,
        birthday: new Date(1991, 12, 31, 0, 0, 0),
        rating: 0
      }
    });
    const { birthday, ...formValue } = payload.form;
    expect({ ...dispatchSpy.calls.mostRecent().args[0] }).toEqual({
      type,
      payload: {
        form: jasmine.objectContaining({
          ...formValue
        })
      }
    });
    expect(birthday).toBeTruthy();
  });
});

function createState(formState: FormState) {
  return {
    examples: {
      form: formState
    }
  } as State;
}
