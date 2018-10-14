import { Injectable } from '@angular/core';
import { LocalStorageService } from '@app/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { asyncScheduler, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  map,
  switchMap,
  tap,
  distinctUntilChanged
} from 'rxjs/operators';
import {
  ActionStockMarketRetrieve,
  ActionStockMarketRetrieveError,
  ActionStockMarketRetrieveSuccess,
  StockMarketActionTypes
} from './stock-market.actions';
import { StockMarketService } from './stock-market.service';
export const STOCK_MARKET_KEY = 'EXAMPLES.STOCKS';

@Injectable()
export class StockMarketEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService,
    private service: StockMarketService
  ) {}

  @Effect()
  retrieveStock = ({ debounce = 500, scheduler = asyncScheduler } = {}) =>
    this.actions$.pipe(
      ofType<ActionStockMarketRetrieve>(StockMarketActionTypes.RETRIEVE),
      tap(action =>
        this.localStorageService.setItem(STOCK_MARKET_KEY, {
          symbol: action.payload.symbol
        })
      ),
      distinctUntilChanged((x, y) => x.payload.symbol === y.payload.symbol),
      debounceTime(debounce, scheduler),
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
