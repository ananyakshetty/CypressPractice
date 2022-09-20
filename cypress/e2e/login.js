
describe('Test suite', function(){
    it('test case',function(){
        cy.visit(url)
        loginPage(username,pwd)
    })

})

function loginPage(username,pwd){
    
    cy.get(cssusername).type(username)
    cy.get(error).should('be.visible')
    cy.get(csspwd).type(pwd)
    cy.get(logins).click()
    cy.title().should('eq','title')

    cy.get('css').each(($el, $list, index)=>{
        if( $el.text()=='submit'){
            cy.wrap($el).click()
        }
      
    })

}


