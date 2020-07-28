import { browser } from 'protractor';

export const getCurrentRouteUrl = () =>
  browser.getCurrentUrl().then((url) => url.substr(url.lastIndexOf('/') + 1));
