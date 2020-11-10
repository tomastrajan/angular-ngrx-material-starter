import { v4 as uuid } from 'uuid';
import { createAction, props } from '@ngrx/store';

import { TodosFilter } from './todos.model';

export const actionTodosAdd = createAction(
  '[Todos] Add',
  (name: string, id: string = uuid()) => ({ name, id })
);

export const actionTodosToggle = createAction(
  '[Todos] Toggle',
  props<{ id: string }>()
);

export const actionTodosRemoveDone = createAction('[Todos] Remove Done');

export const actionTodosFilter = createAction(
  '[Todos] Filter',
  props<{ filter: TodosFilter }>()
);
