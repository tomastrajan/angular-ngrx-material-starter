const newToDo1 = 'New Todo 1';
const newToDo2 = 'New Todo 2';
const existingToDo1 = 'Open Todo list example';
const existingToDo2 = 'Check the other examples';
const existingToDo3 = 'Use Angular ngRx Material Starter in your project';

describe('TODO Actions', () => {
  beforeEach(() => {
    cy.visit('/#/examples/todos');
  });

  it('should be able to add a new todo with enter or + button click', () => {
    cy.get('input[placeholder="I am going to..."]').type(`${newToDo1}{enter}`);
    cy.get('[data-testid="todo-item"]').should('contain', newToDo1);

    cy.get('input[placeholder="I am going to..."]').type(newToDo2);
    cy.get('[aria-label="add todo"]').click();
    cy.get('[data-testid="todo-item"]').should('contain', newToDo2);
  });

  it('should be able to delete', () => {
    cy.contains(existingToDo2).click();
    cy.get('[aria-label="remove done items"]').click();

    cy.get('[data-testid="todo-item"]').should('not.contain', existingToDo1);
    cy.get('[data-testid="todo-item"]').should('not.contain', existingToDo2);
  });

  it('should be able to update', () => {
    cy.get(
      `mat-card:has(span:contains("${existingToDo1}")) mat-checkbox input[type="checkbox"]`
    ).should('be.checked');
    cy.contains(existingToDo1).should('have.class', 'todo-label-done');

    cy.contains(existingToDo1).click();
    cy.get(
      `mat-card:has(span:contains("${existingToDo1}")) mat-checkbox input[type="checkbox"]`
    ).should('not.be.checked');
    cy.contains(existingToDo1).should('not.have.class', 'todo-label-done');
  });

  it('should be able to filter all, done, and active', () => {
    cy.get('[aria-label="open filter menu"]').click();
    cy.get('[aria-label="show all items"]').click();
    cy.contains(existingToDo1);
    cy.contains(existingToDo2);
    cy.contains(existingToDo3);

    cy.get('[aria-label="open filter menu"]').click();
    cy.get('[aria-label="show completed items"]').click();
    cy.contains(existingToDo1);
    cy.get('[data-testid="todo-item"]').should('not.contain', existingToDo2);
    cy.get('[data-testid="todo-item"]').should('not.contain', existingToDo3);

    cy.get('[aria-label="open filter menu"]').click();
    cy.get('[aria-label="show active items"]').click();
    cy.get('[data-testid="todo-item"]').should('not.contain', existingToDo1);
    cy.contains(existingToDo2);
    cy.contains(existingToDo3);
  });
});
