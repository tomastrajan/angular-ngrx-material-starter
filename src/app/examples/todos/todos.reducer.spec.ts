import { todosReducer, initialState } from './todos.reducer';
import { TodosState } from './todos.model';
import {
  ActionTodosAdd,
  ActionTodosFilter,
  ActionTodosRemoveDone,
  ActionTodosToggle
} from './todos.actions';

describe('TodoReducer', () => {
  it('should return the default state', () => {
    const action = {} as any;
    const state = todosReducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('should add a todo', () => {
    const TEST_INITIAL_STATE: TodosState = {
      items: [],
      filter: 'ALL'
    };
    const action = new ActionTodosAdd({ name: 'Mercuccio' });
    const state = todosReducer(TEST_INITIAL_STATE, action);

    expect(state.items.length).toEqual(1);
    expect(state.items[0].name).toEqual('Mercuccio');
  });

  it('should toggle selected todo', () => {
    const TEST_INITIAL_STATE: TodosState = {
      items: [{ id: '1', name: 'Tibald', done: false }],
      filter: 'ALL'
    };
    const action = new ActionTodosToggle({
      id: TEST_INITIAL_STATE.items[0].id
    });
    const state = todosReducer(TEST_INITIAL_STATE, action);
    expect(state.items[0].done).toEqual(true);
  });

  it('should remove done todos', () => {
    const TEST_INITIAL_STATE: TodosState = {
      items: [
        { id: '1', name: 'Romeo', done: false },
        { id: '2', name: 'Juliet', done: true }
      ],
      filter: 'ALL'
    };
    const action = new ActionTodosRemoveDone();
    const state = todosReducer(TEST_INITIAL_STATE, action);
    expect(state.items.length).toBe(1);
    expect(state.items[0].name).toBe('Romeo');
    expect(state.items[0].done).toBeFalsy();
  });

  it('should return filtered todos', () => {
    const TEST_INITIAL_STATE: TodosState = {
      items: [
        { id: '1', name: 'Friar Laurence', done: false },
        { id: '2', name: 'Friar John', done: false },
        { id: '3', name: 'Baltasar', done: true }
      ],
      filter: 'ALL'
    };
    const action = new ActionTodosFilter({ filter: 'DONE' });
    const state = todosReducer(TEST_INITIAL_STATE, action);

    expect(state.items.length).toEqual(3); // must not change items collection
    expect(state.filter).toEqual('DONE');
  });
});
