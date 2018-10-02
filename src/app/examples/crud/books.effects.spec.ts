import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from '@app/core';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MockStore, provideMockStore } from '@testing/utils';
import { State } from '../examples.state';
import { BooksEffects, BOOKS_KEY } from './books.effects';
import { BookState } from './books.model';

describe('BooksEffects', () => {
  const actions$: Observable<Action> = null;
  let bookEffects: BooksEffects;
  let metadata: EffectsMetadata<BooksEffects>;
  let store: MockStore<State>;
  let localStorageService: any;
  let state: State;

  const booksState: BookState = {
    entities: {
      '1': {
        author: 'Author',
        description: 'Description',
        id: '1',
        title: 'Title'
      }
    },
    ids: ['1'],
    selectedBookId: '1'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        BooksEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
        {
          provide: LocalStorageService,
          useValue: jasmine.createSpyObj('LocalStorageService', ['setItem'])
        }
      ]
    });
    localStorageService = TestBed.get(LocalStorageService);
    bookEffects = TestBed.get(BooksEffects);
    store = TestBed.get(Store);
    state = createState(booksState);
    store.setState(state);
  });

  it('should be created', () => {
    expect(bookEffects).toBeTruthy();
  });

  it('persistBooks should not dispatch any action', () => {
    metadata = getEffectsMetadata(bookEffects);
    expect(metadata.persistBooks).toEqual({ dispatch: false });
  });

  it('should call setItem on LocalStorageService for add one action', () => {
    bookEffects.persistBooks.subscribe(() => {
      expect(localStorageService.setItem).toHaveBeenCalledWith(
        BOOKS_KEY,
        state
      );
    });
  });
});

function createState(booksState: BookState) {
  return {
    examples: {
      books: booksState
    }
  } as State;
}
