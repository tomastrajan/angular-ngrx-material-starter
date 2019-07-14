import { createAction, props } from '@ngrx/store';
import { Book } from './books.model';

export const actionBooksUpsertOne = createAction(
  '[Books] Upsert One',
  props<{ book: Book }>()
);

export const actionBooksDeleteOne = createAction(
  '[Books] Delete One',
  props<{ id: string }>()
);
