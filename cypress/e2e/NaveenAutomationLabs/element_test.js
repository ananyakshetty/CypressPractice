describe('Launch my app', ()=>{
    it('App testing', ()=>{
        cy.visit('https://www.freshworks.com/')
        cy.contains('Platform').click()
        cy.contains('Analytics').click()
        cy.url().should('include','/analytics')
    })
})