import { TestBed, inject } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });
  });

  it(
    'should be created',
    inject([LocalStorageService], (service: LocalStorageService) => {
      expect(service).toBeTruthy();
    })
  );
});
