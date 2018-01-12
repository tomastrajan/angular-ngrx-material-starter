import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const STOCK_MARKET_KEY = 'EXAMPLES.STOCKS';

export enum StockMarketActionTypes {
  RETRIEVE = '[Todos] Retrieve',
  RETRIEVE_SUCCESS = '[Todos] Retrieve Success',
  RETRIEVE_ERROR = '[Todos] Retrieve Error'
}

export class ActionStockMarketRetrieve implements Action {
  readonly type = StockMarketActionTypes.RETRIEVE;
  constructor(public payload: { symbol: string }) {}
}

export class ActionStockMarketRetrieveSuccess implements Action {
  readonly type = StockMarketActionTypes.RETRIEVE_SUCCESS;
  constructor(public payload: { stock: Stock }) {}
}

export class ActionStockMarketRetrieveError implements Action {
  readonly type = StockMarketActionTypes.RETRIEVE_ERROR;
  constructor(public payload: { error: HttpErrorResponse }) {}
}

export type StockMarketActions =
  | ActionStockMarketRetrieve
  | ActionStockMarketRetrieveSuccess
  | ActionStockMarketRetrieveError;

export const initialState = {
  symbol: 'GOOGL'
};

export const selectorStocks = state => state.examples.stocks;

export function stockMarketReducer(
  state = initialState,
  action: StockMarketActions
) {
  switch (action.type) {
    case StockMarketActionTypes.RETRIEVE:
      return Object.assign({}, state, {
        loading: true,
        stock: null,
        error: null,
        symbol: action.payload.symbol
      });

    case StockMarketActionTypes.RETRIEVE_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        stock: action.payload.stock,
        error: null
      });

    case StockMarketActionTypes.RETRIEVE_ERROR:
      return Object.assign({}, state, {
        loading: false,
        stock: null,
        error: action.payload.error
      });

    default:
      return state;
  }
}

export interface Stock {
  symbol: string;
  exchange: string;
  last: string;
  ccy: string;
  change: string;
}
