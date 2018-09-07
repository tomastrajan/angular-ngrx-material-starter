import {
  AddOne,
  BookActionTypes,
  DeleteOne,
  ActionBooksPersist
} from './books.actions';

describe('Books Actions', () => {
  describe('BooksAdd', () => {
    it('should create an action', () => {
      const action = new AddOne({
        id: '1',
        title: 'test',
        author: 'test',
        description: ''
      });
      expect(action.book).toEqual(
        jasmine.objectContaining({
          id: '1',
          title: 'test',
          author: 'test',
          description: ''
        })
      );
      expect(action.type).toEqual(BookActionTypes.ADD_ONE);
      expect(action.book).toBeDefined();
    });
  });

  describe('ActionBooksDeleteDone', () => {
    it('should create an action', () => {
      const action = new DeleteOne('1');

      expect({ ...action }).toEqual({
        type: BookActionTypes.DELETE_ONE,
        id: '1'
      });
    });
  });

  describe('ActionBooksPersist', () => {
    it('should create an action', () => {
      const action = new ActionBooksPersist({
        books: { ids: ['1'], entities: {}, selectedBookId: 1 }
      });

      expect({ ...action }).toEqual({
        type: BookActionTypes.PERSIST,
        payload: { books: { ids: ['1'], entities: {}, selectedBookId: 1 } }
      });
    });
  });
});
