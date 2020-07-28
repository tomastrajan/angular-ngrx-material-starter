import { TestBed, inject } from '@angular/core/testing';

import { StockMarketService } from './stock-market.service';

describe('StockMarketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockMarketService]
    });
  });

  it('should be created', inject(
    [StockMarketService],
    (service: StockMarketService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should return expected result', inject(
    [StockMarketService],
    (service: StockMarketService) => {
      const expectedStock: any = {
        symbol: 'TSLA',
        primaryExchange: 'Nasdaq',
        latestPrice: '124',
        change: '1',
        changePercent: '0.81'
      };

      service.retrieveStock('TSLA').subscribe((stock) => {
        expect(stock.symbol).toBe(expectedStock.symbol);
        expect(stock.exchange).toBe(expectedStock.primaryExchange);
        expect(stock.changePercent).toBe(expectedStock.changePercent);
        expect(stock.last).toBe(expectedStock.latestPrice);
      }, fail);
    }
  ));
});
