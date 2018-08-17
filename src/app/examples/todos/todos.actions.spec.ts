import {
  ActionTodosAdd,
  ActionTodosFilter,
  ActionTodosPersist,
  ActionTodosRemoveDone,
  ActionTodosToggle,
  TodosActionTypes
} from './todos.actions';

describe('Todos Actions', () => {
  describe('TodosAdd', () => {
    it('should create an action', () => {
      const action = new ActionTodosAdd({ name: 'test' });
      expect(action.payload).toEqual(
        jasmine.objectContaining({
          name: 'test'
        })
      );
      expect(action.type).toEqual(TodosActionTypes.ADD);
      expect(action.payload.id).toBeDefined();
    });
  });

  describe('ActionTodosToggle', () => {
    it('should create an action', () => {
      const action = new ActionTodosToggle({ id: '1' });

      expect({ ...action }).toEqual({
        type: TodosActionTypes.TOGGLE,
        payload: { id: '1' }
      });
    });
  });

  describe('ActionTodosRemoveDone', () => {
    it('should create an action', () => {
      const action = new ActionTodosRemoveDone();

      expect({ ...action }).toEqual({
        type: TodosActionTypes.REMOVE_DONE
      });
    });
  });

  describe('ActionTodosFilter', () => {
    it('should create an action', () => {
      const action = new ActionTodosFilter({ filter: 'DONE' });

      expect({ ...action }).toEqual({
        type: TodosActionTypes.FILTER,
        payload: { filter: 'DONE' }
      });
    });
  });

  describe('ActionTodosPersist', () => {
    it('should create an action', () => {
      const action = new ActionTodosPersist({
        todos: { filter: 'ALL', items: [] }
      });

      expect({ ...action }).toEqual({
        type: TodosActionTypes.PERSIST,
        payload: { todos: { filter: 'ALL', items: [] } }
      });
    });
  });
});
