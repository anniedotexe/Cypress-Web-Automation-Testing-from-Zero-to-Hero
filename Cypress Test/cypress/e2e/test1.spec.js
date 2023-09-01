/// <reference types="cypress" />

const { first } = require("rxjs-compat/operator/first")

describe('The Locators', () => {

    it('first test', () => {
        // Code reference for the Forms > Form Layouts > Using the Grid > Email field
        //  <input _ngcontent-kdr-c19="" data-cy="imputEmail1" fullwidth="" id="inputEmail1" nbinput="" placeholder="Email" type="email" ng-reflect-full-width="" class="input-full-width size-medium shape-rectangle">

        // Go the page
        cy.visit('/') // baseUrl is provided in cypress.config.ts already

        // Click Forms
        cy.contains('Forms').click()
        
        // Click Form Layouts
        cy.contains('Form Layouts').click()

        // cy.get('') - Get web element
        // Locate element by Tag Name
        cy.get('input') 

        // Locate element by ID
        // Use # before the ID name
        cy.get('#inputEmail1')

        // Locate element by Class Name
        // Use . before the name
        cy.get('.input-full-width')

        // Locate element by Attribute Name
        // Use []
        cy.get('[placeholder]')

        // Locate element by Attribute Name and Value
        // Use []
        cy.get('[placeholder="Email"]')

        // Locate element by Class Value
        // Use [], provide ENTIRE string for class attribute
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // Locate element by Tag Name and Attribute Name with Value
        cy.get('input[placeholder="Email"]')

        // Locate element by different attributes
        // Use [] around each attribute
        cy.get('[placeholder="Email"][fullwidth][type="email"]')

        // Locate element by Tag Name, Attribute Name with Value. ID, and Class Name
        // Put everything as is next to each other
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')


        // The recommended way by Cypress
        // Locate element by custom attribute specifically added for cypress usage
        cy.get('[data-cy="imputEmail1"]')
    })

    it('second test', () => {
        // Code reference for the Forms > Form Layouts > Using the Grid > Sign In button
        // <button _ngcontent-yfj-c18="" data-cy="signInButtonUsingTheGrid" nbbutton="" status="primary" type="submit" _nghost-yfj-c16="" ng-reflect-status="primary" class="appearance-filled size-medium status-primary shape-rectangle transitions" aria-disabled="false" tabindex="0">Sign in</button>

        // Code reference for the Forms > Form Layouts > Horizontal form > Sign In button
        // <button _ngcontent-ekp-c18="" nbbutton="" status="warning" type="submit" _nghost-ekp-c16="" ng-reflect-status="warning" class="appearance-filled size-medium status-warning shape-rectangle transitions" aria-disabled="false" tabindex="0">Sign in</button>

        // Code reference for the Forms > Form Layouts > Horizontal form > Email field
        // <input _ngcontent-ekp-c18="" fullwidth="" id="inputEmail3" nbinput="" placeholder="Email" type="email" ng-reflect-full-width="" class="input-full-width size-medium shape-rectangle">

        // Go the page
        cy.visit('/') // baseUrl is provided in cypress.config.ts already

        // Click Forms
        cy.contains('Forms').click()
        
        // Click Form Layouts
        cy.contains('Form Layouts').click()

        cy.get('[data-cy="signInButton"]') // Added data-cy attribute to the element

        cy.contains('Sign in') // Only gets the first one

        cy.contains('[status="warning"]','Sign in') // Add additional attribute that makes it different from the other Sign in button


        // Travel through the DOM and chain sequence of events

        // Get the email field's form
        // Find the button that should be for Sign in
        cy.get('#inputEmail3')
            .parents('form')
            .find('button') 
            .should('contain', 'Sign in')

        // Get the email field's form
        // Find the button that should be for Sign In
        // Then get it's form and find the checkbox to click
        cy.get('#inputEmail3')
            .parents('form')
            .find('button') 
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()

        // Find nb-card element which contains Horizontal form element
        // Find element with attribute and value for email
        cy.contains('nb-card', 'Horizontal form').find('[type="email"]')
    })

})


// npm start to run UI
// npx cypress open to run cypress