describe('Web tables, pop ups and tooltips', () => {

    it('web tables', () => {
        // Go the page
        cy.visit('/') // baseUrl is provided in cypress.config.ts already

        // Click Tables & Data
        cy.contains('Tables & Data').click()
        
        // Click Smart Table
        cy.contains('Smart Table').click()

        // Get table row with Larry in it
        cy.get('tbody').contains('tr', 'Larry').then( tableRow => {
            // Click the edit button (pencil icon)
            cy.wrap(tableRow).find('.nb-edit').click()
            // Clear and then type 25 into the age field
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25')
            // Click checkmark to save changes
            cy.wrap(tableRow).find('.nb-checkmark').click()
            // Find the 7th column (index 6) and verify it contains the correct value
            cy.wrap(tableRow).find('td').eq(6).should('contain', '25')
        })

        // Click plus sign to add new entry to the table
        cy.get('thead').find('.nb-plus').click()
        // Find 2nd row in the header (new entry) to type in values
        cy.get('thead').find('tr').eq(2).then( tableNewRow => {
            cy.wrap(tableNewRow).find('[placeholder="First Name"]').type('Percy')
            cy.wrap(tableNewRow).find('[placeholder="Last Name"]').type('Jackson')
            // Click checkmark to save changes
            cy.wrap(tableNewRow).find('.nb-checkmark').click()
        })
        // Find first row of the table body (the new entry) and check the columns contain the correct value
        cy.get('tbody tr').first().find('td').then( tableColumns => {
            cy.wrap(tableColumns).eq(2).should('contain', 'Percy')
            cy.wrap(tableColumns).eq(3).should('contain', 'Jackson')
        })

        // Use table search function by age
        const ages = [20, 30, 40, 200]

        cy.wrap(ages).each( age => {
            // Clear field and type in age search
            cy.get('thead [placeholder="Age"]').clear().type(age)
            // Add a small delay (0.5 second) for the table to update
            cy.wait(500)
            // Get each row in the table body
            cy.get('tbody tr').each( tableRow => {
                // If age is 200, verify the table is empty
                if ( age == 200 ) {
                    cy.wrap(tableRow).should('contain', 'No data found')
                }
                // Get 7th column (index 6) and verify the value is correct
                else {
                    cy.wrap(tableRow).find('td').eq(6).should('contain', age)
                }
            })
        })  
    })

    it('tooltips', () => {
        // Go the page
        cy.visit('/') // baseUrl is provided in cypress.config.ts already

        // Click Modal & Overlays
        cy.contains('Modal & Overlays').click()
        
        // Click Tooltip
        cy.contains('Tooltip').click()

        cy.contains('nb-card', 'Colored Tooltips').contains('Default').click()
        cy.get('nb-tooltip').should('contain', 'This is a tooltip')
    })

    it.only('dialog box', () => {
        // Go the page
        cy.visit('/') // baseUrl is provided in cypress.config.ts already

        // Click Tables & Data
        cy.contains('Tables & Data').click()
            
        // Click Smart Table
        cy.contains('Smart Table').click()

        // Verify dialog box content (bad way)
        cy.get('tbody tr').first().find('.nb-trash').click()
        cy.on('window:confirm', ( confirm ) => {
            expect(confirm).to.equal('Are you sure you want to delete?')
        })

        // Verify dialog box content (better way)
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').first().find('.nb-trash').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })

        // Reject the confirm delete dialog box
        cy.get('tbody tr').first().find('.nb-trash').click()
        cy.on('window:confirm', () => false ) 

    })

})


// npm start to run UI
// npx cypress open to run cypress