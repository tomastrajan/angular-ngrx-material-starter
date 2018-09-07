import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import { AppState } from '@app/core';

import { todosReducer } from './todos/todos.reducer';
import { TodosState } from './todos/todos.model';
import { stockMarketReducer } from './stock-market/stock-market.reducer';
import { StockMarketState } from './stock-market/stock-market.model';
import { bookReducer } from './crud/books.reducer';
import { BookState } from './crud/books.model';

export const FEATURE_NAME = 'examples';

export const reducers: ActionReducerMap<ExamplesState> = {
  todos: todosReducer,
  stockMarket: stockMarketReducer,
  books: bookReducer
};

export const selectExamples = createFeatureSelector<State, ExamplesState>(
  FEATURE_NAME
);

export interface ExamplesState {
  todos: TodosState;
  stockMarket: StockMarketState;
  books: BookState;
}

export interface State extends AppState {
  examples: ExamplesState;
}
