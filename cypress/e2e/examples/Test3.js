/// <reference types="Cypress"/>

describe('First Test', function(){
    it('First Test', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
        //Check single check box amd verify if Its checked
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        //Check multiple checkboxes
        cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked')
    })
})