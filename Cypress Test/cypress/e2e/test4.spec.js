describe('Radio, checkboxes, lists, dropdowns', () => {

    // Check method with radio buttons
    it('radio button', () => {
       // Go the page
       cy.visit('/') // baseUrl is provided in cypress.config.ts already

       // Click Forms
       cy.contains('Forms').click()
        
       // Click Form Layouts
       cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioButtons => {
            // select first button
            cy.wrap(radioButtons)   
            .first()
            .check({force: true})
            .should('be.checked')

            // select second button
            cy.wrap(radioButtons)   
            .eq(1)
            .check({force: true})
            
            // check first button is not selected anymore
            cy.wrap(radioButtons)   
            .eq(0)
            .should('not.be.checked')

            cy.wrap(radioButtons)   
            .eq(2)
            .should('be.disabled')
        })
    })

    // Check method with checkboxes
    it.only('checkboxes', () => {
        // Go the page
        cy.visit('/') // baseUrl is provided in cypress.config.ts already

        // Click Modal & Overlays
        cy.contains('Modal & Overlays').click()
         
        // Click Toastr
        cy.contains('Toastr').click()

        // cy.get('[type="checkbox"]').check({force: true})
        // Click on first to uncheck the box
        cy.get('[type="checkbox"]').eq(0).click({force: true})
        // Click on second to check the box
        cy.get('[type="checkbox"]').eq(1).click({force: true})

    })

    // Lists and Dropdowns
    it('lists and dropdowns', () => {
        // Go the page
        cy.visit('/') // baseUrl is provided in cypress.config.ts already

        // cy.get('nav nb-select').click()
        // cy.get('.options-list').contains('Dark').click()
        // cy.get('nav nb-select').should('contain', 'Dark')
        // cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')

        cy.get('nav nb-select').then( dropdown => {
            cy.wrap(dropdown).click()
            cy.get('.options-list nb-option').each( (listItem, index) => {
                // Name of the color
                const itemText = listItem.text().trim()

                const colors = {
                    "Light": "rgb(255, 255, 255)",
                    "Dark": "rgb(34, 43, 69)",
                    "Cosmic": "rgb(50, 50, 89)",
                    "Corporate": "rgb(255, 255, 255)",
                }

                cy.wrap(listItem).click()
                cy.wrap(dropdown).should('contain', itemText)
                // Select color based on itemText, which names the colors
                cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[itemText])
                if( index < 3 ) {
                    cy.wrap(dropdown).click()
                }

            })
        })
    })

})


// npm start to run UI
// npx cypress open to run cypress