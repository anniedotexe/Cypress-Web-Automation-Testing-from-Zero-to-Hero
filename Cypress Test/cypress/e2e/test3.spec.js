const { rgb } = require("d3-color")

describe('The invoke command', () => {

    it('invoke command', () => {
        // Go the page
        cy.visit('/') // baseUrl is provided in cypress.config.ts already

        // Click Forms
        cy.contains('Forms').click()
        
        // Click Form Layouts
        cy.contains('Form Layouts').click()

        // From test1
        // Get this element and it should contain this text
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        // From test2
        // Get this element and then save the result to label jQuery method
        cy.get('[for="exampleInputEmail1"]').then( label => {
            // The text in the label result should equal this
            expect(label.text()).to.equal('Email address')
        })


        // This lesson test 3
        
        // Get this element and use cypress method invoke to get the text from the page, then save it to textVar
        cy.get('[for="exampleInputEmail1"]').invoke('text').then( textVar => {
           // The text should equal this
            expect(textVar).to.equal('Email address')
        })

        // Get the form, find the checkbox element, click it, find the class custom-checkbox
        // Invoke the attribute class should contain the value checked
        // OR Invoke the attribute class, save the result in classValue and verify the result contains the value checked
        cy.contains('nb-card', 'Basic form')
            .find('nb-checkbox')
            .click()
            .find('.custom-checkbox')
            .invoke('attr', 'class')
            // .should('contain', 'checked')
            .then( classValue => {
                expect(classValue).to.contain('checked')
            })
    })

    // it.only('assert property 1', () => {
    //     // Go the page
    //     cy.visit('/') // baseUrl is provided in cypress.config.ts already

    //     // Click Forms
    //     cy.contains('Forms').click()
         
    //     // Click Form Layouts
    //     cy.contains('Datepicker').click()

    //     // Get the Common Datepicker, find the input element and save the result in input
    //     cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
    //         // Wrap the element and click on it to open the datepicker calender
    //         cy.wrap(input).click()

    //         // Get the calendar and click 28
    //         cy.get('nb-calendar-day-picker').contains('28').click()

    //         // Wrap the element and invoke the property value, it should contain this value 
    //         cy.wrap(input).invoke('prop', 'value').should('contain', 'Jun 28, 2023')
    //         // To see this in Chrome inspector
    //         // Inspect the datepicker field > Properties tab > scroll down to 'value'
    //     })
    // })

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

    // Datepicker this version is better than assert property 1
    it('assert property 2', () => {

        function selectDayFromCurrent(day) {
            let date = new Date()
            date.setDate(date.getDate() + day)
            let futureDay = date.getDate()
            let futureMonth = date.toLocaleString('default', {month: 'short'})
            let dateAssert = futureMonth + ' ' + futureDay + ', ' + date.getFullYear()

            cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then( dateAttribute => {
                if (!dateAttribute.includes(futureMonth)) {
                    cy.get('[data-name="chevron-right"]').click()
                    selectDayFromCurrent(day)
                }
                else {
                    cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()
                }
            })
            return dateAssert
        }

        // Go the page
        cy.visit('/') // baseUrl is provided in cypress.config.ts already

        // Click Forms
        cy.contains('Forms').click()
         
        // Click Datepicker
        cy.contains('Datepicker').click()

        cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
            // Wrap the element and click on it to open the datepicker calender
            cy.wrap(input).click()

            // Assert date (x) days from today
            let dateAssert = selectDayFromCurrent(46)
            cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert)
        })
    })

})


// npm start to run UI
// npx cypress open to run cypress