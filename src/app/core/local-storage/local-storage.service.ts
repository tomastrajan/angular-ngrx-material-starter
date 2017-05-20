import { Injectable } from '@angular/core';

const APP_PREFIX = 'ANMS-';

@Injectable()
export class LocalStorageService {

  constructor() {}

  setItem(key: string, value: any) {
    localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
  }

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(`${APP_PREFIX}${key}`));
  }

  static loadInitialState() {
    return Object.keys(localStorage)
      .reduce((state: any, key) => {
        if (key.includes(APP_PREFIX)) {
          state = state || {};
          const stateKey = key.replace(APP_PREFIX, '').toLowerCase();
          state[stateKey] = JSON.parse(localStorage.getItem(key));
        }
        return state;
      }, undefined);
  }

}
