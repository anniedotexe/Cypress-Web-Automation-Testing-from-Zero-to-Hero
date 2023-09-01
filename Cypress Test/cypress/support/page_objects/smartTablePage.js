

export class SmartTablePage {

    updateAgeByFirstName(name, age) {
        cy.get('tbody').contains('tr', name).then( tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type(age)
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', age)
        })
    }

    addNewRecordWithFirstAndLastName(first, last) {
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then( tableNewRow => {
            cy.wrap(tableNewRow).find('[placeholder="First Name"]').type('Percy')
            cy.wrap(tableNewRow).find('[placeholder="Last Name"]').type('Jackson')
            cy.wrap(tableNewRow).find('.nb-checkmark').click()
        })
    }

    deleteRowByIndex(index) {
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').eq(index).find('.nb-trash').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })
    }

}

export const onSmartTablePage = new SmartTablePage()