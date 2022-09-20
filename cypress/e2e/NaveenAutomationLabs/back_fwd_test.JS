describe('back and forward button simulate', () => {
    it('back-fwd test', () => {
        cy.visit('https://www.freshworks.com')
        cy.contains('Platform').click()
        cy.contains('Freshworks Neo').click()
        .go('back')
        .go('forward')
    });
});