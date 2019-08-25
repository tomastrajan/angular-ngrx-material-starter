import { browser, by, element } from 'protractor';

export class TodosPage {
  navigateTo() {
    return browser.get('#/examples/todos');
  }

  getInput() {
    return element(by.css('slang-big-input input'));
  }

  getAddTodoButton() {
    return element(by.css('slang-big-input-action button'));
  }

  getResults() {
    return element.all(by.css('mat-card.todo'));
  }
}
