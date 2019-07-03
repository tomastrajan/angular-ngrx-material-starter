import * as todoAction from './todos.actions';

describe('Todos Actions', () => {
  describe('TodosAdd', () => {
    it('should create an action', () => {
      const action = todoAction.actionTodosAdd('test');
      expect(action.name).toEqual('test');
      expect(action.type).toEqual(todoAction.actionTodosAdd.type);
      expect(action.id).toBeDefined();
    });
  });

  describe('ActionTodosToggle', () => {
    it('should create an action', () => {
      const action = todoAction.actionTodosToggle({ id: '1' });

      expect({ ...action }).toEqual({
        type: todoAction.actionTodosToggle.type,
        id: '1'
      });
    });
  });

  describe('ActionTodosRemoveDone', () => {
    it('should create an action', () => {
      const action = todoAction.actionTodosRemoveDone();

      expect({ ...action }).toEqual({
        type: todoAction.actionTodosRemoveDone.type
      });
    });
  });

  describe('ActionTodosFilter', () => {
    it('should create an action', () => {
      const action = todoAction.actionTodosFilter({ filter: 'DONE' });

      expect({ ...action }).toEqual({
        type: todoAction.actionTodosFilter.type,
        filter: 'DONE'
      });
    });
  });
});
