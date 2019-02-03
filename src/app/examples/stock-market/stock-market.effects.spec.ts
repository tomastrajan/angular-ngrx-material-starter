import { LocalStorageService } from '@app/core';
import { Actions } from '@ngrx/effects';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { of, throwError } from 'rxjs/';
import {
  ActionStockMarketRetrieve,
  ActionStockMarketRetrieveError,
  ActionStockMarketRetrieveSuccess
} from './stock-market.actions';
import { StockMarketEffects, STOCK_MARKET_KEY } from './stock-market.effects';
import { Stock } from './stock-market.model';
import { StockMarketService } from './stock-market.service';

describe('StockMarketEffects', () => {
  let localStorage: jasmine.SpyObj<LocalStorageService>;
  let stockMarket: jasmine.SpyObj<StockMarketService>;

  beforeEach(() => {
    localStorage = jasmine.createSpyObj('localStorageService', ['setItem']);
    stockMarket = jasmine.createSpyObj('stockMarketService', ['retrieveStock']);
  });

  fdescribe('retrieveStock', () => {
    const symbol = 'TSLA';

    it('should emit ActionStockMarketRetrieveSuccess on success', () => {
      const retrieveAction1 = new ActionStockMarketRetrieve({
        symbol
      });
      const retrieveAction2 = new ActionStockMarketRetrieve({
        symbol
      });
      const retrieveAction3 = new ActionStockMarketRetrieve({
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
      const successAction = new ActionStockMarketRetrieveSuccess({
        stock
      });
      const values = {
        a: retrieveAction1,
        b: retrieveAction2,
        c: retrieveAction3,
        s: successAction
      };
      const source = cold('a--b--c', values);
      const expected = cold('--s--s--s', values);
      const actions = new Actions(source);

      stockMarket.retrieveStock.and.returnValue(of(stock));

      const effects = new StockMarketEffects(
        actions,
        localStorage,
        stockMarket
      );

      expect(
        effects.retrieveStock({
          debounce: 20,
          scheduler: getTestScheduler()
        })
      ).toBeObservable(expected);
      expect(localStorage.setItem).toHaveBeenCalledWith(STOCK_MARKET_KEY, {
        symbol
      });
    });

    it('should emit ActionStockMarketRetrieveError on error', () => {
      const retrieveAction = new ActionStockMarketRetrieve({
        symbol
      });
      const error = 'ERROR';
      const errorAction = new ActionStockMarketRetrieveError({
        error
      } as any);
      const values = {
        a: retrieveAction,
        e: errorAction
      };
      const source = cold('a', values);
      const expected = cold('--e', values);
      const actions = new Actions(source);

      stockMarket.retrieveStock.and.returnValue(throwError(error));

      const effects = new StockMarketEffects(
        actions,
        localStorage,
        stockMarket
      );

      expect(
        effects.retrieveStock({
          debounce: 20,
          scheduler: getTestScheduler()
        })
      ).toBeObservable(expected);
    });
  });
});
