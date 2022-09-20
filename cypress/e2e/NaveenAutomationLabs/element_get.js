describe('Check element Get Concept', () => {
    it('Element get Testing', () => {
        cy.visit('https://www.freshworks.com/')
        cy.contains('Platform').click()
        cy.contains('Freshworks Neo').click()
        cy.url().should('include','/platform')
        cy.get('a[class="product-logo-icon"]')
        .should('be.visible')
        .and('contain','Freshworks Neo')

        cy.get('ul[class="footer-nav"] li').should('have.length',37)
        cy.get('ul[class="footer-nav"] li').find('a[href*="footer"]').should('have.length',24)
    });
});