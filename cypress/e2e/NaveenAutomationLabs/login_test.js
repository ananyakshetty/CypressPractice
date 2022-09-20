///<reference types='Cypress'/>

describe('Free crm app', ()=>{
    it('Login Test', ()=>{
        cy.visit('https://classic.crmpro.com/')
        //cy.title().should('eq','CRMPRO  - CRM software for customer relationship management, sales, and support.')
        cy.get('input[name="username"]').type('ananyakshetty')
        cy.get('input[name="password"]').type('ananyakshetty')
        cy.get('input[value="Login"]').click()
        cy.title()
    })
})