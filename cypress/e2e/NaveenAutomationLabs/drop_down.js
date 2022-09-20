describe('Drop Down Test Suite', () => {
    it('Test', () => {
        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial')
        cy.get('#Form_submitForm_Country')
        .select('Andorra')
        .should('have.value','Andorra')
    });

    it('Google Search', () => {
        cy.visit('https://www.google.com/')
        cy.get('input#input').type('Cypress')
    });
});