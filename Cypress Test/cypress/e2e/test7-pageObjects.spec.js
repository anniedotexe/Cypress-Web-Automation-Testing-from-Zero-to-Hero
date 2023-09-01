import { onDatePickerPage } from "../support/page_objects/datepickerPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { navigateTo } from "../support/page_objects/navigationPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

describe('Test with page objects', () => {

    beforeEach('open application', () => {
        // Added command in ../support/commands.ts
        cy.openHomePage()
    })

    it('verify navigations across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.toasterPage()
        navigateTo.tooltipPage()
    })

    it.only('should submit Inline and Basic forms and select tomorrow date on the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Percy Jackson', 'percy@olympus.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('percy@olympus.com', 'Percy123$')

        navigateTo.datepickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(2)
        onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14)

        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Percy', 'Jackson')
        onSmartTablePage.updateAgeByFirstName('Percy', '14')
        onSmartTablePage.deleteRowByIndex(2)

    })
})


// npm start to run UI
// npx cypress open to run cypress