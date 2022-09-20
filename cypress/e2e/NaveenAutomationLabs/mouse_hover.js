describe('Spice Jet', () => {
    it('Spice Jet', () => {
        cy.visit('https://www.amazon.in/')
        cy.get('span[class="nav-line-2 "]').trigger('mouseover')
        cy.get('#nav_prefetch_yourorders').click()
    });

    it.only('Add to cart Test', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.ajax_add_to_cart_button').first().click()
        cy.get('.cross').click()
        cy.wait(3000)
        cy.get('.cart_block').should('be.hidden').invoke('show')
        //cy.get('.shopping_cart a').first().trigger('mouseover')
        cy.get('#button_order_cart').click()
        cy.url().should('include','controller=order')
    });
});