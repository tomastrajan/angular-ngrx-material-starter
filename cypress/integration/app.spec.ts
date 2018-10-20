describe('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should redirect to "about" route', () => {
    cy.url().should('include', 'about');
  });

  it('should display current year in the footer', () => {
    cy.get('[data-testid=footer-year]').should(
      'contain',
      new Date().getFullYear().toString()
    );
  });

  it('should have "About", "Features", "Examples" menus', () => {
    cy.get('mat-toolbar button.nav-button').should(navItems => {
      expect(navItems).to.have.length(3);
      expect(navItems.eq(0)).to.contain('About');
      expect(navItems.eq(1)).to.contain('Features');
      expect(navItems.eq(2)).to.contain('Examples');
    });
  });
});
