import { Action } from '@ngrx/store';
import { Book } from './books.model';
import { BookState } from './books.model';

export enum BookActionTypes {
  ADD_ONE = '[Books] Add One',
  UPDATE_ONE = '[Books] Update One',
  DELETE_ONE = '[Books] Delete One',
  SELECT_ONE = '[Books] Select One',
  PERSIST = '[Books] Persist'
}

export class AddOne implements Action {
  readonly type = BookActionTypes.ADD_ONE;
  constructor(public book: Book) {}
}

export class UpdateOne implements Action {
  readonly type = BookActionTypes.UPDATE_ONE;
  constructor(public id: string, public changes: Partial<Book>) {}
}

export class DeleteOne implements Action {
  readonly type = BookActionTypes.DELETE_ONE;
  constructor(public id: string) {}
}

export class ActionBookSelect implements Action {
  readonly type = BookActionTypes.SELECT_ONE;
  constructor(public id: string) {}
}

export class ActionBooksPersist implements Action {
  readonly type = BookActionTypes.PERSIST;
  constructor(readonly payload: { books: BookState }) {}
}

export type BookActions =
  | AddOne
  | UpdateOne
  | DeleteOne
  | ActionBookSelect
  | ActionBooksPersist;
