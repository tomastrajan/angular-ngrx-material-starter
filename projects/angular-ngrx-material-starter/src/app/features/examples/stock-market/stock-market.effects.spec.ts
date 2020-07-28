import * as assert from 'assert';
import { Actions } from '@ngrx/effects';
import { of, throwError } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { LocalStorageService } from '../../../core/core.module';

import {
  actionStockMarketRetrieve,
  actionStockMarketRetrieveError,
  actionStockMarketRetrieveSuccess
} from './stock-market.actions';
import { StockMarketEffects, STOCK_MARKET_KEY } from './stock-market.effects';
import { Stock } from './stock-market.model';
import { StockMarketService } from './stock-market.service';

const symbol = 'TSLA';

describe('StockMarketEffects', () => {
  let localStorage: jasmine.SpyObj<LocalStorageService>;
  let stockMarket: jasmine.SpyObj<StockMarketService>;
  let scheduler;

  beforeEach(() => {
    localStorage = jasmine.createSpyObj('localStorageService', ['setItem']);
    stockMarket = jasmine.createSpyObj('stockMarketService', ['retrieveStock']);
    scheduler = new TestScheduler((actual, expected) =>
      assert.deepStrictEqual(actual, expected)
    );
  });

  it('should emit ActionStockMarketRetrieveSuccess on success', (done) => {
    scheduler.run((helpers) => {
      const { cold, expectObservable } = helpers;
      const retrieveAction1 = actionStockMarketRetrieve({
        symbol
      });
      const retrieveAction2 = actionStockMarketRetrieve({
        symbol
      });
      const retrieveAction3 = actionStockMarketRetrieve({
        symbol
      });
      const stock: Stock = {
        symbol,
        exchange: 'exchange',
        last: '42',
        ccy: 'USD',
        change: 'change',
        changePositive: true,
        changeNegative: false,
        changePercent: '2.00'
      };
      const successAction = actionStockMarketRetrieveSuccess({
        stock
      });
      const values = {
        a: retrieveAction1,
        b: retrieveAction2,
        c: retrieveAction3,
        s: successAction
      };
      const source = cold('a--b--c', values);
      const expected = '--s--s--s';
      const actions = new Actions(source);

      stockMarket.retrieveStock.and.returnValue(of(stock));

      const effects = new StockMarketEffects(
        actions,
        localStorage,
        stockMarket
      );

      expectObservable(effects.retrieveStock({ debounce: 2 })).toBe(
        expected,
        values
      );

      setTimeout(() => {
        expect(localStorage.setItem).toHaveBeenCalledTimes(3);
        expect(localStorage.setItem).toHaveBeenCalledWith(STOCK_MARKET_KEY, {
          symbol
        });
        done();
      });
    });
  });

  it('should emit ActionStockMarketRetrieveError on error', () => {
    scheduler.run((helpers) => {
      const { cold, expectObservable } = helpers;
      const retrieveAction = actionStockMarketRetrieve({
        symbol
      });
      const error = 'ERROR';
      const errorAction = actionStockMarketRetrieveError({
        error
      } as any);
      const values = {
        a: retrieveAction,
        e: errorAction
      };
      const source = cold('--a', values);
      const expected = '--e';
      const actions = new Actions(source);

      stockMarket.retrieveStock.and.returnValue(throwError(error));

      const effects = new StockMarketEffects(
        actions,
        localStorage,
        stockMarket
      );

      expectObservable(effects.retrieveStock({ debounce: 0 })).toBe(
        expected,
        values
      );
    });
  });
});
