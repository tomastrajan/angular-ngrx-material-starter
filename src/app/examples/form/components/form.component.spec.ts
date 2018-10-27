import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { MockStore, TestingModule } from '@testing/utils';

import { State } from '../../examples.state';
import { FormState } from '../form.model';
import { initialState } from '../form.reducer';
import { FormComponent } from './form.component';
import { NotificationService } from '@app/core/notifications/notification.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let store: MockStore<State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [FormComponent],
      providers: [NotificationService]
    }).compileComponents();

    store = TestBed.get(Store);
    store.setState(createState(initialState));
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function createState(formState: FormState) {
  return {
    examples: {
      form: formState
    }
  } as State;
}
