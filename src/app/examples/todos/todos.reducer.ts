import { v4 as uuid } from 'uuid';
import { Action } from '@ngrx/store';

export const TODOS_KEY = 'EXAMPLES.TODOS';

export enum TodosActionTypes {
  ADD = '[Todos] Add',
  TOGGLE = '[Todos] Toggle',
  REMOVE_DONE = '[Todos] Remove Done',
  FILTER = '[Todos] Filter',
  PERSIST = '[Todos] Persist'
}

export class ActionTodosAdd implements Action {
  readonly type = TodosActionTypes.ADD;
  constructor(public payload: { name: string }) {}
}

export class ActionTodosToggle implements Action {
  readonly type = TodosActionTypes.TOGGLE;
  constructor(public payload: { id: string }) {}
}

export class ActionTodosRemoveDone implements Action {
  readonly type = TodosActionTypes.REMOVE_DONE;
}

export class ActionTodosFilter implements Action {
  readonly type = TodosActionTypes.FILTER;
  constructor(public payload: { filter: TodosFilter }) {}
}

export class ActionTodosPersist implements Action {
  readonly type = TodosActionTypes.PERSIST;
  constructor(public payload: { todos: Todo[] }) {}
}

export type TodosActions =
  | ActionTodosAdd
  | ActionTodosToggle
  | ActionTodosRemoveDone
  | ActionTodosFilter
  | ActionTodosPersist;

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

export const selectorTodos = state => state.examples.todos;

export function todosReducer(
  state: TodosState = initialState,
  action: TodosActions
): TodosState {
  switch (action.type) {
    case TodosActionTypes.ADD:
      return {
        ...state,
        items: state.items.concat({
          id: uuid(),
          name: action.payload.name,
          done: false
        })
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

export interface Todo {
  id: string;
  name: string;
  done: boolean;
}

export type TodosFilter = 'ALL' | 'DONE' | 'ACTIVE';

export interface TodosState {
  items: Todo[];
  filter: TodosFilter;
}
