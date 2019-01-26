import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@app/shared';
import { State } from '../../examples.state';
import { BookState } from '../books.model';
import { CrudComponent } from './crud.component';

describe('CrudComponent', () => {
  let component: CrudComponent;
  let fixture: ComponentFixture<CrudComponent>;
  let store: MockStore<State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        SharedModule,
        TranslateModule.forRoot()
      ],
      declarations: [CrudComponent],
      providers: [provideMockStore()]
    }).compileComponents();
    store = TestBed.get(Store);
    store.setState(createState({ ids: [], entities: {} }));
    fixture = TestBed.createComponent(CrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function createState(booksState: BookState) {
  return {
    examples: {
      books: booksState
    }
  } as State;
}
