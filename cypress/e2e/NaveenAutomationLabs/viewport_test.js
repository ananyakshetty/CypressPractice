describe('testing diff view ports', ()=>{
    before(()=>{
        console.log('Running my test')
    })

    beforeEach(() => {
        cy.visit('https://www.google.com/')
    });

    it('Open in Macbook 13', () => {
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(200)
    });

    it('Open in Macbook 15', () => {
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    });

    it('Open in Iphone-X', () => {
        cy.viewport('iphone-x')
        cy.screenshot()
        cy.wait(200)
    });

    it('Open in 500,750', () => {
        cy.viewport(500,750)
        cy.screenshot()
        cy.wait(200)
    });
}) 