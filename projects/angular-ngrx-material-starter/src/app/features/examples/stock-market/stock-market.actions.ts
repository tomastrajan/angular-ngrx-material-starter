import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Stock } from './stock-market.model';

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
