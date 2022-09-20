/// <reference types="Cypress"/>
import GreenKart from '../PageObjects/GreenKart'

describe('Test suite', function(){
    it('Testcase',function(){
        cy.visit(Cypress.env("url"))
        //print url
        var url=cy.url()
        cy.log(url)
        //Print title
        cy.title().should('eq','GreenKart - veg and fruits kart')
        cy.get('.brand').should('have.text','GREENKART')
        var homePage=new GreenKart()
        //Using xpath
        cy.xpath('//input[@class="search-keyword"]').type('ca')
        cy.wait(2000)
        //Parent child Chaining
        homePage.products().find('.product').should('have.length',4)//Expecting 4 results
        homePage.products().find('.product').each(($el,index,$list) => {
            const textveg=$el.find('h4.product-name').text()
            if (textveg.includes('Cashews'))
            {
                cy.wrap($el).contains('ADD TO CART').click()
            }
        })
        homePage.cart().should('be.visible').click()
        homePage.checkout().should('be.visible').click()
        homePage.placeOrder().should('be.visible').click()
    })
})