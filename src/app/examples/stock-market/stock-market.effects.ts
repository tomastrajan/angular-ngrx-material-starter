import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { LocalStorageService, Action } from '@app/core';

import {
  STOCK_MARKET_KEY,
  STOCK_MARKET_RETRIEVE,
  STOCK_MARKET_RETRIEVE_SUCCESS,
  STOCK_MARKET_RETRIEVE_ERROR
} from './stock-market.reducer';
import { StockMarketService } from './stock-market.service';

@Injectable()
export class StockMarketEffects {

  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService,
    private service: StockMarketService
  ) {}

  @Effect() retrieveStock(): Observable<Action> {
    return this.actions$
      .ofType(STOCK_MARKET_RETRIEVE)
      .do(action => this.localStorageService
        .setItem(STOCK_MARKET_KEY, { symbol: action.payload }))
      .distinctUntilChanged()
      .debounceTime(500)
      .switchMap(action =>
        this.service.retrieveStock(action.payload)
          .map(stock =>
            ({ type: STOCK_MARKET_RETRIEVE_SUCCESS, payload: stock }))
          .catch(err =>
            Observable.of({ type: STOCK_MARKET_RETRIEVE_ERROR, payload: err }))
      );
  }

}
