import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Stock } from './stock-market.reducer';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const API_URL = 'http://finance.google.com/finance/info?client=ig&q=NYSE:';

@Injectable()
export class StockMarketService {

  constructor(
    private http: Http
  ) {}

  retrieveStock(symbol: string): Observable<Stock> {
    return this.http.get(PROXY_URL + API_URL + symbol)
      .map((res: Response) => JSON.parse(res.text().replace('//', ''))[0])
      .map((stock: any) => ({
        symbol: stock.t,
        exchange: stock.e,
        last: stock.l,
        ccy: stock.l_cur.replace(stock.l, ''),
        change: stock.c.substr(1),
        changePositive: stock.c.indexOf('+') === 0,
        changeNegative: stock.c.indexOf('-') === 0,
        changePercent: (parseFloat(stock.c) / parseFloat(stock.l) * 100)
          .toFixed(2)
      }));
  }

}
