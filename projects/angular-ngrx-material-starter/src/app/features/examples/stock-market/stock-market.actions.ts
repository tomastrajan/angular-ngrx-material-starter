import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Stock } from './stock-market.model';
import { createHTTPActions } from '../../../shared/extension/createHTTPActions';

export const actionStockMarketRetrieve = createAction(
  '[Stock] Retrieve',
  props<{ symbol: string }>()
);

export const actionStockMarketRetrieveSuccess = createAction(
  '[Stock] Retrieve Success',
  props<{ stock: Stock }>()
);

export const actionStockMarketRetrieveError = createAction(
  '[Stock] Retrieve Error',
  props<{ error: HttpErrorResponse }>()
);

// TODO: A way to create generic action
export const [
  actionStockMarketRetrieve2,
  actionStockMarketRetrieveSuccess2,
  actionStockMarketRetrieveError2
] = createHTTPActions<'Parameters', Stock, HttpErrorResponse>(
  '[Stock] Retrieve'
);
