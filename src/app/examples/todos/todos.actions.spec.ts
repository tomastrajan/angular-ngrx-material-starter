import * as fromTodos from './todos.reducer';

describe('Todos Actions', () => {
  describe('TodosAdd', () => {
    it('should create an action', () => {
      const action = new fromTodos.ActionTodosAdd({ name: 'test' });

      expect({ ...action }).toEqual({
        type: fromTodos.TodosActionTypes.ADD,
        payload: { name: 'test' }
      });
    });
  });

  describe('ActionTodosToggle', () => {
    it('should create an action', () => {
      const action = new fromTodos.ActionTodosToggle({ id: '1' });

      expect({ ...action }).toEqual({
        type: fromTodos.TodosActionTypes.TOGGLE,
        payload: { id: '1' }
      });
    });
  });

  describe('ActionTodosRemoveDone', () => {
    it('should create an action', () => {
      const action = new fromTodos.ActionTodosRemoveDone();

      expect({ ...action }).toEqual({
        type: fromTodos.TodosActionTypes.REMOVE_DONE
      });
    });
  });

  describe('ActionTodosFilter', () => {
    it('should create an action', () => {
      const action = new fromTodos.ActionTodosFilter({ filter: 'DONE' });

      expect({ ...action }).toEqual({
        type: fromTodos.TodosActionTypes.FILTER,
        payload: { filter: 'DONE' }
      });
    });
  });

  describe('ActionTodosPersist', () => {
    it('should create an action', () => {
      const action = new fromTodos.ActionTodosPersist({ todos: [] });

      expect({ ...action }).toEqual({
        type: fromTodos.TodosActionTypes.PERSIST,
        payload: { todos: [] }
      });
    });
  });
});
