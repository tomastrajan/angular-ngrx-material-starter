import { AppPage } from './app.po';

import { getCurrentRouteUrl } from './utils';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => (page = new AppPage()));

  it('should redirect to "about" route', async () => {
    await page.navigateTo();
    expect(await getCurrentRouteUrl()).toEqual('about');
  });

  it('should display current year in the footer', async () => {
    await page.navigateTo();
    expect(await page.getCurrentYear()).toEqual(
      new Date().getFullYear().toString()
    );
  });

  it('should have "About", "Features", "Examples" menus', async () => {
    await page.navigateTo();
    expect(await page.getAllMenus()).toEqual(['About', 'Features', 'Examples']);
  });
});
