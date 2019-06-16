import { HttpErrorResponse } from '@angular/common/http';

export interface Stock {
  symbol: string;
  exchange: string;
  last: string;
  ccy: string;
  change: string;
  changePositive: boolean;
  changeNegative: boolean;
  changePercent: string;
}

export interface StockMarketState {
  symbol: string;
  loading: boolean;
  stock?: Stock;
  error?: HttpErrorResponse;
}
