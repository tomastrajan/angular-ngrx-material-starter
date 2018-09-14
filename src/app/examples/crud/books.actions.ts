import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Book } from './books.model';

export enum BookActionTypes {
  ADD_ONE = '[Books] Add One',
  UPDATE_ONE = '[Books] Update One',
  DELETE_ONE = '[Books] Delete One',
  SELECT_ONE = '[Books] Select One'
}

export class ActionBooksAddOne implements Action {
  readonly type = BookActionTypes.ADD_ONE;
  constructor(readonly payload: { book: Book }) {}
}

export class ActionBooksUpdateOne implements Action {
  readonly type = BookActionTypes.UPDATE_ONE;
  constructor(readonly payload: { update: Update<Book> }) {}
}

export class ActionBooksDeleteOne implements Action {
  readonly type = BookActionTypes.DELETE_ONE;
  constructor(readonly payload: { id: string }) {}
}

export class ActionBooksSelect implements Action {
  readonly type = BookActionTypes.SELECT_ONE;
  constructor(readonly payload: { id: string }) {}
}

export type BookActions =
  | ActionBooksAddOne
  | ActionBooksUpdateOne
  | ActionBooksDeleteOne
  | ActionBooksSelect;
