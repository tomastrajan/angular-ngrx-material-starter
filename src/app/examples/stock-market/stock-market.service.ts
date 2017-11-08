import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { Stock } from './stock-market.reducer';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const API_URL = 'https://finance.google.com/finance?output=json&q=NYSE:';

@Injectable()
export class StockMarketService {
  constructor(private httpClient: HttpClient) {}

  retrieveStock(symbol: string): Observable<Stock> {
    return this.httpClient
      .get(PROXY_URL + API_URL + symbol, { responseType: 'text' })
      .pipe(
        map((res: string) => JSON.parse(res.replace('//', ''))[0]),
        map((stock: any) => ({
          symbol: stock.t,
          exchange: stock.e,
          last: stock.l,
          ccy: 'USD',
          change: stock.c.substr(1),
          changePositive: stock.c.indexOf('+') === 0,
          changeNegative: stock.c.indexOf('-') === 0,
          changePercent: (
            parseFloat(stock.c) /
            parseFloat(stock.l) *
            100
          ).toFixed(2)
        }))
      );
  }
}
