import { browser, by, element } from 'protractor';

export class AngularNgrxMaterialStarterPage {
  navigateTo() {
    return browser.get('/');
  }

  getCurrentYear() {
    return element(by.css('.signature'))
      .getText()
      .then(txt => txt.match(/[0-9]{4}/g)[0]);
  }

  getAllMenus() {
    return element
      .all(by.css('mat-toolbar button.nav-button'))
      .map(elm => elm.getText())
      .then(texts => texts);
  }
}
