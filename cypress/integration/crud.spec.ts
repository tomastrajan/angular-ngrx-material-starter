const book_title = 'The Little Schemer';

describe('CRUD Actions', () => {
  context('Valid Data', () => {
    beforeEach(() => {
      cy.visit('/#/examples/crud');
      cy.get('[data-testid="add-crud"]').click();
      cy.get('[placeholder="Title"]').type(book_title);
      cy.get('[placeholder="Author"]').type('Friedman{enter}');
    });

    it('should display a book added', () => {
      cy.get('[data-testid="item-title"]').should('contain', book_title);
    });

    it('should not display a book deleted', () => {
      cy.get('[data-testid="crud-item"]')
        .first()
        .click();
      cy.get('[data-testid="delete-crud"]').click();
      cy.get('[data-testid="item-title"]').should(titles => {
        expect(titles).to.have.length(1);
      });
    });

    it('should update a book title', () => {
      cy.get('[data-testid="crud-item"]')
        .first()
        .click();
      cy.get('[data-testid="edit-crud"]').click();
      cy.get('[placeholder="Title"]').type(', 4th Edition{enter}');
      cy.get('[data-testid="item-title"]').should('contain', '4th Edition');
    });
  });

  context('Empty book title and author', () => {
    beforeEach(() => {
      cy.visit('/#/examples/crud');
      cy.get('[data-testid="add-crud"]').click();
    });

    it('should display errors', () => {
      cy.get('[placeholder="Title"]').type('{enter}');
      cy.get('[data-testid="error-title-crud"]').should(
        'contain',
        'Title is required'
      );
      cy.get('[data-testid="error-author-crud"]').should(
        'contain',
        'Author is required'
      );
    });
  });
});
