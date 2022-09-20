/// <reference types="cypress" />

describe('Table Test',function(){
    it('Table Test',function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
        //Verify String present anywhare in the table
        cy.get('table[name="BookTable"]').contains('td','Learn Selenium').should('be.visible')
        //Check the Value presense in specific row and column
        cy.get('table[name="BookTable"] tbody tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')
        //Verify the book name is "Master in Java" whose author is Amod

        cy.get('table[name="BookTable"] >tbody>tr>td:nth-child(2)').each(($e,index,$list) =>{
            const text=$e.text()
            cy.log(text)
            if (text.includes('Amod'))
            {
                cy.get('table[name="BookTable"] >tbody>tr>td:nth-child(1)').eq(index).then(function(bName)
                {
                    const bookName=bName.text()
                    expect(bookName).to.equal("Master In Java")
                })
            }
        })
        

        
    })
})

