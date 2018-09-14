import {
  BookActionTypes,
  ActionBooksAddOne,
  ActionBooksUpdateOne,
  ActionBooksDeleteOne
} from './books.actions';

describe('Books Actions', () => {
  it('should create ActionBooksAddOne action', () => {
    const action = new ActionBooksAddOne({
      book: {
        id: '1',
        title: 'test',
        author: 'test',
        description: ''
      }
    });
    expect(action.type).toEqual(BookActionTypes.ADD_ONE);
    expect(action.payload.book).toEqual(
      jasmine.objectContaining({
        id: '1',
        title: 'test',
        author: 'test',
        description: ''
      })
    );
  });

  it('should create ActionBooksUpdateOne action', () => {
    const action = new ActionBooksUpdateOne({
      update: {
        id: '1',
        changes: {
          id: 'updated'
        }
      }
    });
    expect(action.type).toEqual(BookActionTypes.UPDATE_ONE);
    expect(action.payload.update).toEqual(
      jasmine.objectContaining({
        id: '1',
        changes: {
          id: 'updated'
        }
      })
    );
  });

  it('should create ActionBooksDeleteOne action', () => {
    const action = new ActionBooksDeleteOne({ id: '1' });
    expect(action.type).toEqual(BookActionTypes.DELETE_ONE);
    expect(action.payload.id).toEqual('1');
  });
});
