describe('reload page', ()=>{
    it('Page reload test', () => {
        cy.visit('https://www.freshworks.com')
        cy.contains('Platform').click()
        cy.reload()
        cy.contains('Platform').should('be.visible')
        cy.reload(true).contains('Platform').should('be.visible')
    });
})