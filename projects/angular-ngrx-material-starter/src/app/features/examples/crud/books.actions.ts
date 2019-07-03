import { createAction, props } from '@ngrx/store';
import { Book } from './books.model';

export enum BookActionTypes {
  UPSERT_ONE = '[Books] Upsert One',
  DELETE_ONE = '[Books] Delete One'
}

export const actionBooksUpsertOne = createAction(
  BookActionTypes.UPSERT_ONE,
  props<{ book: Book }>()
);

export const actionBooksDeleteOne = createAction(
  BookActionTypes.DELETE_ONE,
  props<{ id: string }>()
);
