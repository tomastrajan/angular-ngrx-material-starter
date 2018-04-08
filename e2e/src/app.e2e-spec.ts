import { AngularNgrxMaterialStarterPage } from './app.po';

describe('angular-ngrx-material-starter App', () => {
  let page: AngularNgrxMaterialStarterPage;

  beforeEach(() => {
    page = new AngularNgrxMaterialStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ANGULAR NGRX MATERIAL STARTER');
  });
});
