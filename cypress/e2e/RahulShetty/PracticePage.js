/// <reference types="Cypress"/>
/// <reference types="Cypress-iframe"/>
import 'cypress-iframe'

describe('Test suite',function(){
    it('My first test',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')

        //radio button
        cy.get('input[value="radio2"]').should('be.visible').click()
        //Dynamic dropdown 
        cy.get('#autocomplete').type('In')

        cy.get('.ui-menu-item div').each(($el,index,$list)=>{
            if ($el.text()=='India')
            {
                $el.click()
            }
        })

        cy.get('#autocomplete').should('have.value','India')

        //Static Dropdown
        cy.get('select').select('Option2').should('have.value','option2')

        //Single Checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //Multiple CheckBoxes
        cy.get('input[type="checkbox"]').check(['option2','option3'])
        //Verifying if element is hidden
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //Alert
        cy.get('#alertbtn').click()
        //window:alert
        cy.on('window:alert', (str) =>{
            expect(str).eq('Hello , share this practice page and share your knowledge')
        })
        //Confirm
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (str) =>{
            expect(str).eq('Hello , Are you sure you want to confirm?')
        })

        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','rahulshettyacademy')
        //Navigations
        cy.go('back')
        //cy.go('forward')

        //WebTable
        cy.get('tr td:nth-child(2)').each(($e1,index, $list)=>{
            var text=$e1.text()
            if(text.includes('Python'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>{
                    var pricetext=price.text()
                    expect(pricetext).to.eq('25')
                })
            }
        })

        //Mouse hover
        //cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')
        //Open new tab
        cy.get('#opentab').then(function(e1)
        {
            const url=e1.prop('href')
            cy.visit(url)
        })

        cy.go('back')
        cy.frameLoaded('#courses-iframe')

        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)
    })
})