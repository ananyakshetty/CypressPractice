describe('MyTestSuite', () => {
    it('Verify the title of Page', () => {
      cy.visit('https://www.nopcommerce.com/')
      cy.title().should('eq','Free and open-source eCommerce platform. ASP.NET based shopping cart. - nopCommerce')
    })
    it('Verify the title of Page - Negative', () => {
      cy.visit('https://www.nopcommerce.com/')
      cy.title().should.not.be('eq','Store Demo')
    })
  })