import { v4 as uuid } from 'uuid';

import { TodosActions, TodosActionTypes } from './todos.actions';
import { Todo, TodosState } from './todos.model';

export const initialState: TodosState = {
  items: [
    { id: uuid(), name: 'Open Todo list example', done: true },
    { id: uuid(), name: 'Check the other examples', done: false },
    {
      id: uuid(),
      name: 'Use Angular ngRx Material Starter in your project',
      done: false
    }
  ],
  filter: 'ALL'
};

export function todosReducer(
  state: TodosState = initialState,
  action: TodosActions
): TodosState {
  switch (action.type) {
    case TodosActionTypes.ADD:
      return {
        ...state,
        items: [
          {
            id: action.payload.id,
            name: action.payload.name,
            done: false
          },
          ...state.items
        ]
      };

    case TodosActionTypes.TOGGLE:
      return {
        ...state,
        items: state.items.map(
          (item: Todo) =>
            item.id === action.payload.id ? { ...item, done: !item.done } : item
        )
      };

    case TodosActionTypes.REMOVE_DONE:
      return {
        ...state,
        items: state.items.filter((item: Todo) => !item.done)
      };

    case TodosActionTypes.FILTER:
      return { ...state, filter: action.payload.filter };

    default:
      return state;
  }
}
