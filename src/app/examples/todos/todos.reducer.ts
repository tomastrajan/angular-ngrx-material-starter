import { v4 as uuid } from 'node-uuid';

import { Action } from '@app/core';

export const initialState = {
  items: [
    { id: uuid(), name: 'Open Todo list example', done: true },
    { id: uuid(), name: 'Check the other examples', done: false },
    { id: uuid(), name: 'Use Angular ngRx Material Starter in your project', done: false }
  ],
  filter: 'ALL'
};

export type TodoFilter = 'ALL' | 'DONE' | 'ACTIVE';

export const TODOS_KEY = 'EXAMPLES.TODOS';
export const TODOS_ADD = 'TODOS_ADD';
export const TODOS_TOGGLE = 'TODOS_TOGGLE';
export const TODOS_REMOVE_DONE = 'TODOS_REMOVE_DONE';
export const TODOS_FILTER = 'TODOS_FILTER';
export const TODOS_PERSIST = 'TODOS_PERSIST';

export const actionRemoveDoneTodos = () => ({ type: TODOS_REMOVE_DONE });
export const actionAddTodo = (name: string) =>
  ({ type: TODOS_ADD, payload: name });
export const actionToggleTodo = (id: string) =>
  ({ type: TODOS_TOGGLE, payload: id });
export const actionPersistTodos = (todos) =>
  ({ type: TODOS_PERSIST, payload: todos });
export const actionFilterTodos = (filter: TodoFilter) =>
  ({ type: TODOS_FILTER, payload: filter });

export const selectorTodos = state => state.examples.todos;

export function todosReducer(state = initialState, action: Action) {
  switch (action.type) {
    case TODOS_ADD:
      return Object.assign({}, state, {
        items: state.items
          .concat({ id: uuid(), name: action.payload, done: false })
      });

    case TODOS_TOGGLE:
      state.items.some((item: Todo) => {
        if (item.id === action.payload) {
          item.done = !item.done;
          return true;
        }
      });
      return Object.assign({}, state, {
        items: [...state.items]
      });

    case TODOS_REMOVE_DONE:
      return Object.assign({}, state,
        { items: state.items.filter((item: Todo) => !item.done) });

    case TODOS_FILTER:
      return Object.assign({}, state, { filter: action.payload });

    default:
      return state;
  }
}

export interface Todo {
  id: string;
  name: string;
  done: boolean;
}
