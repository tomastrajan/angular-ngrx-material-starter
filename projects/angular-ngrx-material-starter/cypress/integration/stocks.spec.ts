describe('STOCKS Actions', () => {
  beforeEach(() => {
    cy.visit('/#/examples/stock-market');
  });

  it('should display data for a valid stock symbol', () => {
    const goodStockSymbol = 'NVDA';

    cy.get('input[placeholder="Stock symbol"]').type(
      `{selectall}${goodStockSymbol}`
    );

    cy.get('.mat-card-title', { timeout: 10000 }).should(
      'contain',
      goodStockSymbol
    );
  });
});
