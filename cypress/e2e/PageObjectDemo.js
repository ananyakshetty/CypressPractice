/// <reference types="cypress" />

import LoginPage from './PageObjects/LoginPage'

describe('Table Suite',function(){
    it('Login Test',function(){
        const lp=new LoginPage()
        lp.visit()
        lp.fillEmail('abcd@gmail.com')
        lp.fillPassword('admin')
        lp.submit()
        //cy.title().should('be.equal','')
    })
})
