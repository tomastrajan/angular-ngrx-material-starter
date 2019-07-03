import {
  actionBooksDeleteOne,
  actionBooksUpsertOne,
  BookActionTypes
} from './books.actions';

describe('Books Actions', () => {
  it('should create ActionBooksUpsertOne action', () => {
    const action = actionBooksUpsertOne({
      book: {
        id: '1',
        title: 'test',
        author: 'test',
        description: ''
      }
    });
    expect(action.type).toEqual(BookActionTypes.UPSERT_ONE);
    expect(action.book).toEqual(
      jasmine.objectContaining({
        id: '1',
        title: 'test',
        author: 'test',
        description: ''
      })
    );
  });

  it('should create ActionBooksDeleteOne action', () => {
    const action = actionBooksDeleteOne({ id: '1' });
    expect(action.type).toEqual(BookActionTypes.DELETE_ONE);
    expect(action.id).toEqual('1');
  });
});
