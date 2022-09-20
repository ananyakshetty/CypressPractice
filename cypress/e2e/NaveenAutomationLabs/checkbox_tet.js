describe('Category page Tests', () => {
    it('Category Page on automation practice ', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('a[title="Women"]').first().click()
        cy.get('.checkbox').check().should('be.checked')
        cy.get('.checkbox').uncheck().should('not.be.checked')
    });
    it.only('Snap Deal page', () => {
        cy.visit('https://www.snapdeal.com/')
        cy.get('#inputValEnter').type('Laptop')
        cy.get('.searchformButton').click()
        cy.get('div[data-name="Brand"] input[type="checkbox"]').check({force:true})
        cy.get('div[data-name="Brand"] input[type="checkbox"]').should('be.checked')
        cy.get('div[data-name="Brand"] input[type="checkbox"]').uncheck({force:true})
        cy.get('div[data-name="Brand"] input[type="checkbox"]').should('not.be.checked')
    });
});