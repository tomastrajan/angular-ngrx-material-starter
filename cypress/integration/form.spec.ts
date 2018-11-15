describe('Form Actions', () => {
  beforeEach(() => {
    cy.visit('/#/examples/form');
  });

  it('should be able to input all values', () => {
    cy.contains('Auto Save')
      .click()
      .get('input')
      .should('be.checked');
    cy.get('[placeholder="Username"]')
      .type('someusername')
      .should('have.value', 'someusername');
    cy.get('[placeholder="Password"]')
      .type('somepassword')
      .should('have.value', 'somepassword');
    cy.get('[placeholder="E-mail"]')
      .type('some@email.com')
      .should('have.value', 'some@email.com');
    cy.get('[placeholder="Birthday"]')
      .type('1/1/2000')
      .should('have.value', '1/1/2000');
    cy.get('[placeholder="Description"]')
      .type('some description')
      .should('have.value', 'some description');
    cy.contains('Request a gift').click();
    cy.get('label:contains("Request a gift") input').should('be.checked');

    // delay seems to help prevent flaky/buggy "stickiness" when clicking right arrow.
    // otherwise, 3 presses would result in 8 instead of 3 sometimes
    cy.get('mat-slider[formcontrolname="rating"]')
      .focus()
      .type('{rightarrow}{rightarrow}{rightarrow}', { delay: 1000 })
      .should('have.attr', 'aria-valuenow', '3');

    // check gift sent and not sent notification on clicking send
    cy.contains('button', 'Send').click();
    cy.contains('Gift sent!');

    cy.contains('Request a gift').click();
    cy.get('label:contains("Request a gift") input').should('not.be.checked');

    cy.contains('button', 'Send').click();
    cy.contains('No gift sent.');
  });

  it('should show validation messages', () => {
    // no validation errors with pristine form
    cy.get('mat-error').should('have.length', 0);

    // required validation messages appear when click "Send"
    cy.contains('button', 'Send').click();
    cy.get('mat-error').should('have.length', 5);
    cy.should('contain', 'Username is required')
      .should('contain', 'Password is required')
      .should('contain', 'E-mail is required')
      .should('contain', 'Birthday is required')
      .should('contain', 'Description is required');

    // email format
    cy.get('[placeholder="E-mail"]').type('a');
    cy.get('form').should('contain', 'E-mail should be valid');
    cy.get('[placeholder="E-mail"]').type('@a.com');
    cy.get('form').should('not.contain', 'E-mail should be valid');

    // description length validation and count/max hint
    cy.get('[placeholder="Description"]')
      .type('123456789')
      .blur();
    cy.get('form').should('contain', 'Description should be longer than 10');
    cy.get('[placeholder="Description"]').type('0');
    cy.get('form').should(
      'not.contain',
      'Description should be longer than 10'
    );
    cy.contains('10 / 1000');

    // reset and no errors should exist
    cy.contains('button', 'Reset').click();
    cy.get('mat-error').should('not.exist');
  });

  it('should disable save button if autosave is enabled', () => {
    cy.contains('button', 'Save').should('be.enabled');
    cy.contains('Auto Save').click();
    cy.contains('button', 'Save').should('be.disabled');
    cy.contains('Auto Save').click();
    cy.contains('button', 'Save').should('be.enabled');
  });
});
