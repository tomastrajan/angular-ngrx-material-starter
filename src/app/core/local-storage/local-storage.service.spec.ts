import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });
    service = TestBed.get(LocalStorageService);
  });

  afterEach(() => localStorage.clear());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get and set the item', () => {
    service.setItem('TEST', 'item');
    expect(service.getItem('TEST')).toBe('item');
  });

  it('should load initial state', () => {
    service.setItem('TEST.PROP', 'value');
    expect(LocalStorageService.loadInitialState()).toEqual({
      test: { prop: 'value' }
    });
  });

  it('should load nested initial state', () => {
    service.setItem('TEST.PROP1.PROP2', 'value');
    expect(LocalStorageService.loadInitialState()).toEqual({
      test: { prop1: { prop2: 'value' } }
    });
  });

  it('should load nested initial state with camel case properties and object value', () => {
    service.setItem('TEST.PROP.SUB-PROP', 'value');
    expect(LocalStorageService.loadInitialState()).toEqual({
      test: { prop: { subProp: 'value' } }
    });
  });
});
