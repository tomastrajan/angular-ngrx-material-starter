import { browser, by, element } from 'protractor';

export class AboutPage {
  navigateTo() {
    return browser.get('/about');
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }

  getGettingStarted() {
    return element(by.css('.get-started'));
  }

  getActionButton(idx) {
    return element.all(by.css('.actions a')).get(idx);
  }
}
