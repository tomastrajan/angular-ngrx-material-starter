import { browser, by, element } from 'protractor';

export const getCurrentRouteUrl = () => {
  return browser.getCurrentUrl().then(url => {
    return url.substr(url.lastIndexOf('/') + 1);
  });
};
