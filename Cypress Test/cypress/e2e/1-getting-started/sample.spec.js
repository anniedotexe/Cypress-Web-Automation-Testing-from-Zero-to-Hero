const { beforeEach } = require("node:test")

describe('The first suite', () => {

    describe('Suite section', () => {

        beforeEach('code for every test in this describe', () => {
            // code to repeat for every test
        })
        
        it('test name one', () => {

        })

        it('test name two', () => {

        })

    })

    it('first test', () => {

    })

    it('second test', () => {

    })


})

describe('The second suite', () => {

    it('first test', () => {

    })

    it('second test', () => {

    })

})