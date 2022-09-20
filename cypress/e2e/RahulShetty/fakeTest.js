describe('My First Test Suite', () => {
    it('Mock fake response Test case', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
            {
                statusCode: 200,
                body: [
                    {
                        "book_name": "RestAssured with Java",
                        "isbn": "RSU",
                        "aisle": "2301"
                    }
                ]
            }
        ).as('bookretrievals')
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@bookretrievals').should(({ request, response }) => {
            cy.get('tr').should('have.length', response.body.length + 1)
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')
    })

    it('Compare table to response array', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
            {
                statusCode: 200,
                body: [
                    {
                        "book_name": "RestAssured with Java",
                        "isbn": "RSU",
                        "aisle": "2301"
                    }, {
                        "book_name": "RestAssured with Java",
                        "isbn": "RSU",
                        "aisle": "2301"
                    }
                ]
            }
        ).as('bookretrievals')
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@bookretrievals').should(({ request, response }) => {
            cy.get('tr').should('have.length', response.body.length + 1)
        })
    })

    it('Compare table to response array', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            (req) => {
                req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=ananya'
                req.continue((res) => {
                    expect(res.statusCode).to.equal(404)
                })
            }).as("dummyUrl")
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@dummyUrl')
    })

    it.only('Compare table to response array', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.request('POST', 'https://rahulshettyacademy.com/Library/Addbook.php', {
            "name": "Learn Anything",
            "isbn": "bduouf",
            "aisle": "42s8",
            "authot": "John Foe"
        }).then(function (response) {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.equal(200)
            //expect(response.body).to.have.property("Msg", "successfully added")
        })
    })
})