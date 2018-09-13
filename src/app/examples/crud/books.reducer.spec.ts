import { bookReducer, initialState } from './books.reducer';
import { BookState } from './books.model';
import {
  ActionBooksAddOne,
  ActionBooksUpdateOne,
  ActionBooksDeleteOne,
  ActionBooksSelect
} from './books.actions';

describe('BookReducer', () => {
  const TEST_INITIAL_STATE: BookState = {
    selectedBookId: null,
    ids: ['123'],
    entities: {
      '123': {
        id: '123',
        title: 'Reactive Programming with Angular and ngrx',
        author: 'Oren Farhi',
        description:
          'Learn to Harness the Power of Reactive Programming with RxJS and ngrx Extensions'
      }
    }
  };

  it('should return the default state', () => {
    const action = {} as any;
    const state = bookReducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('should add a book', () => {
    const action = new ActionBooksAddOne({
      book: {
        id: '1234',
        title: 'test',
        author: 'test',
        description: 'test'
      }
    });
    const state = bookReducer(TEST_INITIAL_STATE, action);

    expect(state.ids.length).toEqual(2);
    expect(state.entities['1234'].title).toEqual('test');
  });

  it('should update a book', () => {
    const id = TEST_INITIAL_STATE.ids[0] as string;
    const action = new ActionBooksUpdateOne({
      update: {
        id,
        changes: {
          title: 'updated',
          author: 'updated',
          description: 'updated'
        }
      }
    });

    const state = bookReducer(TEST_INITIAL_STATE, action);
    expect(state.entities[id]).toEqual(
      jasmine.objectContaining({
        title: 'updated',
        author: 'updated',
        description: 'updated'
      })
    );
  });

  it('should remove a book', () => {
    const id = TEST_INITIAL_STATE.ids[0] as string;
    const action = new ActionBooksDeleteOne({ id });
    const state = bookReducer(TEST_INITIAL_STATE, action);
    expect(state.entities[id]).toBe(undefined);
  });

  it('should select a book', () => {
    const id = TEST_INITIAL_STATE.ids[0] as string;
    const action = new ActionBooksSelect({ id });
    const state = bookReducer(TEST_INITIAL_STATE, action);
    expect(state.selectedBookId).toBe(id as string);
  });
});
