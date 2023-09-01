describe('The then and wrap methods', () => {

    it('then and wrap methods', () => {
        // Using the Grid form

        // Go the page
        cy.visit('/') // baseUrl is provided in cypress.config.ts already

        // Click Forms
        cy.contains('Forms').click()
        
        // Click Form Layouts
        cy.contains('Form Layouts').click()

        // In nb-card named Using the Grid, find the element value inputEmail1
        // It should contain Email
        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')

        // In nb-card named Using the Grid, find the element value inputEmail1
        // It should contain Password
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')

        // In nb-card named Basic form, find the element value exampleInputEmail1
        // It should contain Email address
        cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')

        // In nb-card named Basic form, find the element value exampleInputPassword1
        // It should contain Password
        cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')

        // Better way to do it in cypress with less repetition in multiple lines

        // In nb-card named Using the Grid, the result is saved in firstForm jQuery object
        cy.contains('nb-card', 'Using the Grid').then( firstForm => {
            
            // Get the text for each element name and save into a variable
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()

            // Verify the correct text exists per element
            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')


            // This will not work if outside of firstForm wrap because we need to use the constant passwordLabelFirst that was initialized inside here

            // In nb-card named Basic form, the result is saved in secondForm jQuery object
            cy.contains('nb-card', 'Basic form').then( secondForm => {
                // Get the text for each element name and save into a variable
                const passwordLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text()

                // Verify the the text in passwordLabelFirst is the same as the text in passwordLabelSecond
                expect(passwordLabelFirst).to.equal(passwordLabelSecond)

                // Need to wrap the secondForm jQuery object in order to be able call cypress methods
                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
            })
        })
    })

})


// npm start to run UI
// npx cypress open to run cypress