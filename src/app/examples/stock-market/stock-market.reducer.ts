import { Action } from '@app/core';

export const initialState = {
  symbol: 'GOOGL'
};

export const STOCK_MARKET_KEY = 'EXAMPLES.STOCKS';
export const STOCK_MARKET_RETRIEVE = 'STOCK_MARKET_RETRIEVE';
export const STOCK_MARKET_RETRIEVE_SUCCESS = 'STOCK_MARKET_RETRIEVE_SUCCESS';
export const STOCK_MARKET_RETRIEVE_ERROR = 'STOCK_MARKET_RETRIEVE_ERROR';

export const actionRetrieveStock = (symbol: string) =>
  ({ type: STOCK_MARKET_RETRIEVE, payload: symbol });

export const selectorStocks = state => state.examples.stocks;

export function stockMarketReducer(state = initialState, action: Action) {
  switch (action.type) {
    case STOCK_MARKET_RETRIEVE:
      return Object.assign({}, state, {
        loading: true,
        stock: null,
        error: null,
        symbol: action.payload,
      });

    case STOCK_MARKET_RETRIEVE_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        stock: action.payload,
        error: null
      });

    case STOCK_MARKET_RETRIEVE_ERROR:
      return Object.assign({}, state, {
        loading: false,
        stock: null,
        error: action.payload
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
