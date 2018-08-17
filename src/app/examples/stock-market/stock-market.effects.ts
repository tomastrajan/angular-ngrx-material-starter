import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  tap,
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError
} from 'rxjs/operators';

import { LocalStorageService } from '@app/core';

import { StockMarketService } from './stock-market.service';
import {
  ActionStockMarketRetrieve,
  ActionStockMarketRetrieveError,
  ActionStockMarketRetrieveSuccess,
  StockMarketActionTypes
} from './stock-market.actions';

export const STOCK_MARKET_KEY = 'EXAMPLES.STOCKS';

@Injectable()
export class StockMarketEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService,
    private service: StockMarketService
  ) {}

  @Effect()
  retrieveStock() {
    return this.actions$.pipe(
      ofType<ActionStockMarketRetrieve>(StockMarketActionTypes.RETRIEVE),
      tap(action =>
        this.localStorageService.setItem(STOCK_MARKET_KEY, {
          symbol: action.payload.symbol
        })
      ),
      distinctUntilChanged(),
      debounceTime(500),
      switchMap((action: ActionStockMarketRetrieve) =>
        this.service
          .retrieveStock(action.payload.symbol)
          .pipe(
            map(stock => new ActionStockMarketRetrieveSuccess({ stock })),
            catchError(error =>
              of(new ActionStockMarketRetrieveError({ error }))
            )
          )
      )
    );
  }
}
