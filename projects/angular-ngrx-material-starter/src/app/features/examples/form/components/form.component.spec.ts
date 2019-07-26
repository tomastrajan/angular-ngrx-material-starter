import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { NotificationService } from '../../../../core/core.module';
import { SharedModule } from '../../../../shared/shared.module';

import { State } from '../../examples.state';
import { FormState } from '../form.model';
import { FormComponent } from './form.component';
import { initialState } from '../form.reducer';

describe('FormComponent', () => {
  let store: MockStore<State>;
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let dispatchSpy: jasmine.Spy;

  const getInput = (fieldName: string) =>
    fixture.debugElement.query(By.css(`[formControlName="${fieldName}"]`));

  const getSaveButton = () =>
    fixture.debugElement.queryAll(By.css('.buttons button'))[1];

  const getResetButton = () =>
    fixture.debugElement.queryAll(By.css('.buttons button'))[2];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [SharedModule, NoopAnimationsModule, TranslateModule.forRoot()],
      declarations: [FormComponent],
      providers: [
        NotificationService,
        provideMockStore({
          initialState: createState(initialState)
        })
      ]
    });

    store = TestBed.get(Store);
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    dispatchSpy = spyOn(store, 'dispatch');
  });

  it('should save form', async () => {
    const inputEvent = new KeyboardEvent('input', {
      bubbles: true,
      cancelable: true,
      shiftKey: false
    });

    getInput('username').nativeElement.value = 'tomastrajan';
    getInput('username').nativeElement.dispatchEvent(inputEvent);
    fixture.detectChanges();

    getSaveButton().nativeElement.click();
    fixture.detectChanges();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    console.log(dispatchSpy.calls.mostRecent().args[0]);
    expect(dispatchSpy.calls.mostRecent().args[0].type).toBe('[Form] Update');
    expect(dispatchSpy.calls.mostRecent().args[0].form).toEqual({
      autosave: false,
      username: 'tomastrajan',
      password: '',
      email: '',
      description: '',
      requestGift: '',
      birthday: '',
      rating: 0
    });
  });

  it('should reset form', async () => {
    const inputEvent = new KeyboardEvent('input', {
      bubbles: true,
      cancelable: true,
      shiftKey: false
    });

    getInput('username').nativeElement.value = 'tomastrajan';
    getInput('username').nativeElement.dispatchEvent(inputEvent);
    fixture.detectChanges();

    getResetButton().nativeElement.click();
    fixture.detectChanges();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy.calls.mostRecent().args[0].type).toBe('[Form] Reset');
    expect(getInput('username').nativeElement.value).toBe('');
  });
});

function createState(formState: FormState): State {
  return {
    examples: {
      form: formState
    }
  } as State;
}
