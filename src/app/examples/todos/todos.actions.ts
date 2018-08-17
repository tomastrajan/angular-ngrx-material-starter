import { v4 as uuid } from 'uuid';
import { Action } from '@ngrx/store';

import { TodosFilter, TodosState } from './todos.model';

export enum TodosActionTypes {
  ADD = '[Todos] Add',
  TOGGLE = '[Todos] Toggle',
  REMOVE_DONE = '[Todos] Remove Done',
  FILTER = '[Todos] Filter',
  PERSIST = '[Todos] Persist'
}

export class ActionTodosAdd implements Action {
  readonly type = TodosActionTypes.ADD;
  readonly payload: { id: string; name: string };

  constructor({ id = uuid(), name = '' }: { id?: string; name: string }) {
    this.payload = { id, name };
  }
}

export class ActionTodosToggle implements Action {
  readonly type = TodosActionTypes.TOGGLE;

  constructor(readonly payload: { id: string }) {}
}

export class ActionTodosRemoveDone implements Action {
  readonly type = TodosActionTypes.REMOVE_DONE;
}

export class ActionTodosFilter implements Action {
  readonly type = TodosActionTypes.FILTER;

  constructor(readonly payload: { filter: TodosFilter }) {}
}

export class ActionTodosPersist implements Action {
  readonly type = TodosActionTypes.PERSIST;

  constructor(readonly payload: { todos: TodosState }) {}
}

export type TodosActions =
  | ActionTodosAdd
  | ActionTodosToggle
  | ActionTodosRemoveDone
  | ActionTodosFilter
  | ActionTodosPersist;
