import { AngularNgrxMaterialStarterPage } from './app.po';

import { getCurrentRouteUrl } from './utils';

describe('angular-ngrx-material-starter App', () => {
  let page: AngularNgrxMaterialStarterPage;

  beforeEach(() => {
    page = new AngularNgrxMaterialStarterPage();
  });

  it('should redirect to "about" route', () => {
    page.navigateTo();
    expect(getCurrentRouteUrl()).toEqual('about');
  });

  it('should display current year in the footer', () => {
    page.navigateTo();
    expect(page.getCurrentYear()).toEqual(new Date().getFullYear().toString());
  });

  it('should have "About", "Features", "Examples" menus', () => {
    page.navigateTo();
    page.getAllMenus().then(menus => {
      expect(menus).toEqual(['About', 'Features', 'Examples']);
    });
  });
});
