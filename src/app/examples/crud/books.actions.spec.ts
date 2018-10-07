import {
  BookActionTypes,
  ActionBooksUpsertOne,
  ActionBooksDeleteOne
} from './books.actions';

describe('Books Actions', () => {
  it('should create ActionBooksUpsertOne action', () => {
    const action = new ActionBooksUpsertOne({
      book: {
        id: '1',
        title: 'test',
        author: 'test',
        description: ''
      }
    });
    expect(action.type).toEqual(BookActionTypes.UPSERT_ONE);
    expect(action.payload.book).toEqual(
      jasmine.objectContaining({
        id: '1',
        title: 'test',
        author: 'test',
        description: ''
      })
    );
  });

  it('should create ActionBooksDeleteOne action', () => {
    const action = new ActionBooksDeleteOne({ id: '1' });
    expect(action.type).toEqual(BookActionTypes.DELETE_ONE);
    expect(action.payload.id).toEqual('1');
  });
});
