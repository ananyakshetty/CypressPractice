/// <reference types="cypress" />

describe('My Test Suite',function(){
it('Navigation test',function(){
    cy.visit('https://www.nopcommerce.com/en/demo')
    cy.title().should('eq','Store Demo - nopCommerce')//Home Page
    cy.get('.btn.blue-button').click()
    cy.title().should('eq','Get started with nopCommerce - nopCommerce')//Get Started Page
    cy.go(-1)//Go Back
    cy.title().should('eq','Store Demo - nopCommerce')//Home Page
    cy.go(1)//Go Forward
    cy.title().should('eq','Get started with nopCommerce - nopCommerce')//Get Started Page
    cy.go('back')//Go Back
    cy.title().should('eq','Store Demo - nopCommerce')//Home Page
    cy.go('forward')//Go Forward
    cy.title().should('eq','Get started with nopCommerce - nopCommerce')//Get Started Page
    cy.reload()
})
})