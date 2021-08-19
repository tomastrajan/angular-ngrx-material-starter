import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, debounceTime, map, switchMap, tap } from 'rxjs/operators';

import { LocalStorageService } from '../../../core/core.module';

import {
  actionStockMarketRetrieve,
  actionStockMarketRetrieveError,
  actionStockMarketRetrieveSuccess
} from './stock-market.actions';
import { StockMarketService } from './stock-market.service';

export const STOCK_MARKET_KEY = 'EXAMPLES.STOCKS';

@Injectable()
export class StockMarketEffects {
  retrieveStock = createEffect(
    () =>
      ({ debounce = 500 } = {}) =>
        this.actions$.pipe(
          ofType(actionStockMarketRetrieve),
          tap((action) =>
            this.localStorageService.setItem(STOCK_MARKET_KEY, {
              symbol: action.symbol
            })
          ),
          debounceTime(debounce),
          switchMap((action) =>
            this.service.retrieveStock(action.symbol).pipe(
              map((stock) => actionStockMarketRetrieveSuccess({ stock })),
              catchError((error) =>
                of(actionStockMarketRetrieveError({ error }))
              )
            )
          )
        )
  );
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private service: StockMarketService
  ) {}
}
