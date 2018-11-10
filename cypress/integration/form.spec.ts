// const book_title = 'The Little Schemer';

describe('Form Actions', () => {
  beforeEach(() => {
    cy.visit('/#/examples/form');
  });

  it('should be able to input all values', () => {
    cy.get('mat-slide-toggle[formcontrolname="autosave"]').click();
    cy.get('mat-form-field input[formcontrolname="username"]').type(
      'someusername'
    );
    cy.get('input[formcontrolname="password"]').type('somepassword');
    cy.get('input[formcontrolname="email"]').type('some@email.com');
    cy.get('input[formcontrolname="birthday"]').type('1/1/2000');
    cy.get('textarea[formcontrolname="description"]').type('some description');
    cy.get('mat-checkbox[formcontrolname="requestGift"] label').click();

    // TODO: slider
    cy.get('mat-slider[formcontrolname="rating"]').click();
  });

  it('should show validation messages', () => {
    // no validation errors with pristine form
    cy.get('mat-error').should('have.length', 0);

    // required validation messages appear when click "Send"
    cy.contains('button', 'Send').click();
    cy.get('mat-error').should('have.length', 5);
    cy.get('form')
      .should('contain', 'Username is required')
      .should('contain', 'Password is required')
      .should('contain', 'E-mail is required')
      .should('contain', 'Birthday is required')
      .should('contain', 'Description is required');

    // email format
    cy.get('form input[formcontrolname="email"]').type('a');
    cy.get('form').should('contain', 'E-mail should be valid');
    cy.get('form input[formcontrolname="email"]').type('@a.com');
    cy.get('form').should('not.contain', 'E-mail is required');
    cy.get('form').should('not.contain', 'E-mail should be valid');

    // description length
    cy.get('form textarea[formcontrolname="description"]')
      .type('123456789')
      .blur();
    cy.get('form').should('contain', 'Description should be longer than 10');
    cy.get('form textarea[formcontrolname="description"]').type('0');
    cy.get('form').should(
      'not.contain',
      'Description should be longer than 10'
    );
    cy.get(
      'mat-form-field:has(textarea[formcontrolname="description"]) mat-hint'
    ).should('contain', '10 / 1000');

    // reset
    cy.contains('button', 'Reset').click();
    cy.get('mat-error').should('not.exist');
  });

  it('should disable save button if autosave is enabled', () => {
    cy.contains('button', 'Save').should('be.enabled');
    cy.get('mat-slide-toggle[formcontrolname="autosave"]').click();
    cy.contains('button', 'Save').should('be.disabled');
    cy.get('mat-slide-toggle[formcontrolname="autosave"]').click();
    cy.contains('button', 'Save').should('be.enabled');
  });
});
