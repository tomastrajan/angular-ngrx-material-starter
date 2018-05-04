import { AboutPage } from './about.po';
import { getCurrentRouteUrl } from '../utils';

describe('About Page', () => {
  let page: AboutPage;

  beforeEach(() => (page = new AboutPage()));

  it('should display main heading', async () => {
    await page.navigateTo();
    expect(await page.getParagraphText()).toEqual(
      'ANGULAR NGRX MATERIAL STARTER'
    );
  });

  it('should display "Geting Started" section', async () => {
    await page.navigateTo();
    expect((await page.getGettingStarted()).isPresent()).toBe(true);
  });

  it('first action button should lead to "Features" route', async () => {
    await page.navigateTo();
    await page.getActionButton(0).click();
    expect(await getCurrentRouteUrl()).toBe('features');
  });
});
