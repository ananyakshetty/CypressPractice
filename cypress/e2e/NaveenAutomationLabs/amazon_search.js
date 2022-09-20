describe('Amazon Search App ', () => {
    it('Search Test', () => {
        cy.visit('https://www.amazon.in/')
        //within
        cy.get('.nav-search-field').within(()=>{
            cy.get('#twotabsearchtextbox').type('Apple mac book Laptop')
        })
        //find
        cy.get('.nav-search-field').find('#twotabsearchtextbox').type('Apple mac book Laptop')
    });
});