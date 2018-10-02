const book_title = 'The Little Schemer';

describe('CRUD Actions', () => {
	context('Valid Data', function(){
		beforeEach(() => {
			cy.visit('/#/examples/crud');
			cy.get('.add').click();
			cy.get('#mat-input-0').type(book_title);
			cy.get('#mat-input-1').type('Friedman{enter}');
		});
	  
		it('should display a book added', () => {
			cy.get('mat-card>h3').should('contain', book_title);
		});
	  
		it('should not display a book deleted', () => {
			cy.get('mat-card').first().click();
			cy.get('[ng-reflect-message="Delete book"]').click();
			cy.get('mat-card>h3').should(titles => {
				expect(titles).to.have.length(1);
			});
		
		});
	  
		it('should update a book title', () => {
			cy.get('mat-card').first().click();
			cy.get('[ng-reflect-message="Edit book"]').click();
			cy.get('#mat-input-0').type(', 4th Edition{enter}');
			cy.get('h3').should('contain', '4th Edition');
		
		});

	});
	
	context('Empty book title and author', function(){
		beforeEach(() => {
			cy.visit('/#/examples/crud');
			cy.get('.add').click();
		});
	  
		it('should display errors', () => {
			cy.get('#mat-input-1').type('{enter}');
			cy.get('mat-error').should(errors => {
				expect(errors).to.have.length(2);
			});
		});
		
	});

});
