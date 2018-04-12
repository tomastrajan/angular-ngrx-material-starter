import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Stock } from './stock-market.reducer';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

@Injectable()
export class StockMarketService {
  constructor(private httpClient: HttpClient) {}

  retrieveStock(symbol: string): Observable<Stock> {


    return this.httpClient
      .get(PROXY_URL + `https://api.iextrading.com/1.0/stock/${symbol}/stats`)
      .pipe(
        map((stock: any) => ({
          symbol: stock.companyName,
          exchange: stock.EBITDA,
          last: stock.latestEPS,
          ccy: 'USD',
          change: stock.c,
          changePositive: stock.day30ChangePercent.toString().indexOf('+') === 0,
          changeNegative: stock.day30ChangePercent.toString().indexOf('-') === 0,
          changePercent: stock.day30ChangePercent.toFixed(2)
        }))
      );

  }
}
