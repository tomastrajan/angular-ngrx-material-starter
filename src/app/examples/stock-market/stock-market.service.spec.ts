import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CoreModule } from '@app/core';

import { StockMarketService } from './stock-market.service';

describe('StockMarketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule],
      providers: [StockMarketService]
    });
  });

  it(
    'should be created',
    inject([StockMarketService], (service: StockMarketService) => {
      expect(service).toBeTruthy();
    })
  );
});
