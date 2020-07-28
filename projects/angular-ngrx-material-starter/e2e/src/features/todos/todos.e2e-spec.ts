import { browser, ExpectedConditions as EC } from 'protractor';

import { TodosPage } from './todos.po';

describe('Todos Page', () => {
  let page: TodosPage;

  beforeEach(() => (page = new TodosPage()));

  it('adds todo', () => {
    page.navigateTo();

    page.getInput().sendKeys('Run e2e tests!');
    page.getAddTodoButton().click();

    browser.wait(EC.presenceOf(page.getResults().get(3)), 5000);

    expect(page.getResults().count()).toBe(4);
    expect(
      page
        .getResults()
        .get(0)
        .getText()
        .then((text) => text.trim())
    ).toBe('Run e2e tests!');
  });
});
