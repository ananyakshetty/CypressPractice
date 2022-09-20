/// <reference types="Cypress"/>

describe('Test suite',function(){
    it('My first test',function(){
        //Test Steps
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        var a=cy.title()
        cy.get('input[class="search-keyword"]').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').should('have.length',4)
        
        // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('@productlocator').find('.product').each(($el, index, $list) => {
            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                $el.find('button').click()
            }
        })

        // const logo=cy.get('.brand.greenLogo')
        // cy.log(logo.text())

        cy.get('.brand.greenLogo').then(function(logo)
        {
            console.log('sf')
            cy.log(logo.text())
        }
        )

        cy.get('.cart-icon').click()
        
    })
})