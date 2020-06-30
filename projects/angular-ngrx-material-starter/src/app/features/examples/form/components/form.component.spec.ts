import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { NotificationService } from '../../../../core/core.module';
import { SharedModule } from '../../../../shared/shared.module';

import { FormComponent } from './form.component';
import { selectFormState } from '../form.selectors';
import { Form } from '../form.model';

import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatInputHarness } from '@angular/material/input/testing';
import { MatButtonHarness } from '@angular/material/button/testing';

import { NgxTrimDirectiveModule } from 'ngx-trim-directive';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';
import '../../phone-type-formatter.br-ch-cn-de-es-fr-gb-il-pt-sk-us';

describe('FormComponent', () => {
  let store: MockStore;
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let dispatchSpy: jasmine.Spy;
  let loader: HarnessLoader;

  const getInput = (fieldName: string) =>
    loader.getHarness(
      MatInputHarness.with({ selector: `[formControlName="${fieldName}"]` })
    );

  const getSaveButton = () =>
    loader.getHarness(
      MatButtonHarness.with({ text: 'anms.examples.form.save' })
    );

  const getResetButton = async () =>
    loader.getHarness(
      MatButtonHarness.with({ text: 'anms.examples.form.reset' })
    );

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        NoopAnimationsModule,
        TranslateModule.forRoot(),
        NgxTrimDirectiveModule,
        NgxCleaveDirectiveModule
      ],
      declarations: [FormComponent],
      providers: [provideMockStore(), NotificationService]
    });

    store = TestBed.inject(MockStore);
    store.overrideSelector(selectFormState, { form: {} as Form });
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);

    dispatchSpy = spyOn(store, 'dispatch');
  });

  it('should save form with trimmed username and formatted phone number', async () => {
    const usernameInput = await getInput('username');
    const phoneNumberInput = await getInput('phoneNumber');
    const birthdayInput = await getInput('birthday');
    const saveButton = await getSaveButton();

    await usernameInput.setValue('   tomas trajan   ');
    await phoneNumberInput.setValue('258888888');
    await birthdayInput.setValue('2153');
    await saveButton.click();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy.calls.mostRecent().args[0].type).toBe('[Form] Update');
    expect(dispatchSpy.calls.mostRecent().args[0].form).toEqual({
      autosave: false,
      username: 'tomastrajan',
      password: '',
      email: '',
      phoneNumber: '+41-25-888-88-88',
      description: '',
      requestGift: '',
      birthday: new Date(2003, 1, 15),
      rating: 0
    });
  });

  it('should reset form', async () => {
    const usernameInput = await getInput('username');
    const resetButton = await getResetButton();

    await usernameInput.setValue('tomastrajan');
    await resetButton.click();
    const usernameValue = await usernameInput.getValue();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy.calls.mostRecent().args[0].type).toBe('[Form] Reset');
    expect(usernameValue).toBe('');
  });
});
