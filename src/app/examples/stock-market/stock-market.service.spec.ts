import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';

import { StockMarketService } from './stock-market.service';

describe('StockMarketService', () => {
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule, SharedModule],
      providers: [
        StockMarketService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
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
        primaryExchange: 'Nasdaq Global Select',
        latestPrice: 284.96,
        change: -9.88,
        changePercent: -0.03351
      };

      httpClientSpy.get.and.returnValue(of(expectedStock));

      service.retrieveStock('TS').subscribe(stock => {
        expect(stock.symbol).toBe(expectedStock.symbol);
        expect(stock.exchange).toBe(expectedStock.primaryExchange);
        expect(stock.changePercent).toBe(
          expectedStock.changePercent.toFixed(2)
        );
        expect(stock.last).toBe(expectedStock.latestPrice);
      }, fail);

      expect(httpClientSpy.get.calls.count()).toBe(1, 'called once');
    }
  ));
});
