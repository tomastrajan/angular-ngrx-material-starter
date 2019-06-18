import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Stock } from './stock-market.model';

@Injectable()
export class StockMarketService {
  constructor() {}

  retrieveStock(symbol: string): Observable<Stock> {
    // would do HTTP  request but is hard to find reliable free stock quote API
    const result = this.buildResult(symbol);
    return of(result);
  }

  private buildResult(symbol: string): Stock {
    return {
      symbol,
      exchange: 'Nasdaq',
      last: '124',
      ccy: 'USD',
      change: '1',
      changePositive: true,
      changeNegative: false,
      changePercent: '0.81'
    };
  }
}
