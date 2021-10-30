import { StockMarketState } from './stock-market.model';
import {
  actionStockMarketRetrieve,
  actionStockMarketRetrieveError,
  actionStockMarketRetrieveSuccess
} from './stock-market.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: StockMarketState = {
  symbol: 'GOOGL',
  loading: false
};

const reducer = createReducer(
  initialState,
  on(actionStockMarketRetrieve, (state, { payload }) => ({
    ...state,
    loading: true,
    stock: undefined,
    error: undefined,
    symbol: payload.symbol
  })),
  on(actionStockMarketRetrieveSuccess, (state, { payload }) => ({
    ...state,
    loading: false,
    stock: payload?.stock,
    error: undefined
  })),
  on(actionStockMarketRetrieveError, (state, { payload }) => ({
    ...state,
    loading: false,
    stock: undefined,
    error: payload?.error
  }))
);

export function stockMarketReducer(
  state: StockMarketState | undefined,
  action: Action
) {
  return reducer(state, action);
}
