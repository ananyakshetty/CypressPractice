
import HomePage from '../../support/PageObjects/HomePage'
import ProductsPage from '../../support/PageObjects/Products'

describe('Test Suite', () => {

    before(() => {
        cy.fixture('examplejson').then(function(data){
            this.data=data//available to entire class
        })
    });

    it('Testcase', function(){
        const homePage=new HomePage()
        const productsPage=new ProductsPage()
        cy.visit(Cypress.env('url')+'/angularpractice/')
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEnterprunar().should('be.disabled')
        homePage.getShopTab().click()
        cy.selectProduct('Blackberry')
        cy.selectProduct('Nokia')
        productsPage.checkoutButton().click()
        var sum=0
        cy.get('tr td:nth-child(4) strong').each(($e1,index,$list)=>{
            cy.log($e1.text())
            const actualText=$e1.text()
            var res=actualText.split(" ")
            res=res[1].trim()
            cy.log(res)
            sum=Number(sum)+Number(res)
        }).then(function(){
            cy.log(sum)
        })

        cy.get('h3 strong').then(function(element){
            const amount=element.text()
            var res=amount.split(" ")
            var total=res[1].trim()
            expect(Number(total)).to.eq(sum)
        })
        
        productsPage.checkoutButton2().click()
        productsPage.contryDropdown().type('India')
        productsPage.countryResults().click()
    });
}); 