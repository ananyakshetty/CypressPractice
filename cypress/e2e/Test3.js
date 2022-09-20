/// <reference types="Cypress"/>

describe('Test suite',function(){
    it('My first test',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //Multiple CheckBoxes
        cy.get('input[type="checkbox"]').check(['option2','option3'])
    })
})