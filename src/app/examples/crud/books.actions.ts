import { Action } from '@ngrx/store';
import { Book } from './books.model';

export enum BookActionTypes {
  UPSERT_ONE = '[Books] Upsert One',
  DELETE_ONE = '[Books] Delete One'
}

export class ActionBooksUpsertOne implements Action {
  readonly type = BookActionTypes.UPSERT_ONE;
  constructor(readonly payload: { book: Book }) {}
}

export class ActionBooksDeleteOne implements Action {
  readonly type = BookActionTypes.DELETE_ONE;
  constructor(readonly payload: { id: string }) {}
}

export type BookActions = ActionBooksUpsertOne | ActionBooksDeleteOne;
