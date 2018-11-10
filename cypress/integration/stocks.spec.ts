describe('STOCKS Actions', () => {
  beforeEach(() => {
    cy.visit('/#/examples/stock-market');
  });

  it('should display data for a valid stock symbol', () => {
    const goodStockSymbol = 'NVDA';

    cy.get('input[placeholder="Stock symbol"]').type(
      '{selectall}' + goodStockSymbol
    );

    cy.get('.mat-card-title').should('contain', goodStockSymbol);
  });

  it('should display not found error for an invalid stock symbol', () => {
    const badStockSymbol = 'BADSTOCK';

    cy.get('input[placeholder="Stock symbol"]').type(
      '{selectall}' + badStockSymbol
    );

    cy.get('p.error-state')
      .should('contain', 'not found')
      .should('contain', badStockSymbol);
  });
});
