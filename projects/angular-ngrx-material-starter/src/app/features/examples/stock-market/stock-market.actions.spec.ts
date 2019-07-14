import {
  actionStockMarketRetrieve,
  actionStockMarketRetrieveError,
  actionStockMarketRetrieveSuccess
} from './stock-market.actions';
import { Stock } from './stock-market.model';
import { HttpErrorResponse } from '@angular/common/http';

const symbol = 'TSLA';

describe('Stock Market Actions', () => {
  it('should create StockMarketRetrieve action', () => {
    const action = actionStockMarketRetrieve({ symbol });
    expect(action.type).toEqual(actionStockMarketRetrieve.type);
    expect(action.symbol).toEqual(symbol);
  });

  it('should create StockMarketRetrieveSuccess action', () => {
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
    const action = actionStockMarketRetrieveSuccess({ stock });
    expect(action.type).toEqual(actionStockMarketRetrieveSuccess.type);
    expect(action.stock).toEqual(
      jasmine.objectContaining({
        ...stock
      })
    );
  });

  it('should create StockMarketRetrieveError action', () => {
    const error = new HttpErrorResponse({});
    const action = actionStockMarketRetrieveError({ error: error });

    expect(action.type).toEqual(actionStockMarketRetrieveError.type);
    expect(action.error).toEqual(error);
  });
});
