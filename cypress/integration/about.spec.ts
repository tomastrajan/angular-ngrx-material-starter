describe('About', () => {
  beforeEach(() => {
    cy.visit('/#/about');
  });

  it('should display main heading', () => {
    cy.get('h1').should('contain', 'Angular NgRx Material Starter');
  });

  it('should display "Geting Started" section', () => {
    cy.get('[data-testid="get-started"]').should('contain', 'Get started');
  });

  it('first action button should lead to "Features" route', () => {
    cy.get('.actions a')
      .first()
      .click();
    cy.url().should('include', 'features');
  });
});
