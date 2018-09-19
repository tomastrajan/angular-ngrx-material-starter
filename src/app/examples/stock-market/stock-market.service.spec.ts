import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

import { CoreModule } from '@app/core';

import { StockMarketService } from './stock-market.service';

describe('StockMarketService', () => {
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule],
      providers: [
        StockMarketService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
  });

  it(
    'should be created',
    inject([StockMarketService], (service: StockMarketService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'should return expected result',
    inject([StockMarketService], (service: StockMarketService) => {
      const expectedStock: any = {
        symbol: 'TSLA',
        primaryExchange: 'Nasdaq Global Select',
        latestPrice: 284.96,
        change: -9.88,
        changePercent: -0.03351
      };

      httpClientSpy.get.and.returnValue(of(expectedStock));

      service
        .retrieveStock('TS')
        .subscribe(stock => expect(stock).toBeTruthy(), fail);

      expect(httpClientSpy.get.calls.count()).toBe(1, 'called once');
    })
  );

  it(
    'should return error when server returns 404',
    inject([StockMarketService], (service: StockMarketService) => {
      const errorResponse = new HttpErrorResponse({
        error: 'call expected error',
        statusText: 'Not Found',
        status: 404
      });
      httpClientSpy.get.and.returnValue(of(errorResponse));

      service
        .retrieveStock('TS')
        .subscribe(
          () => fail('expected an error'),
          error => expect(error).not.toBeUndefined()
        );
    })
  );
});
