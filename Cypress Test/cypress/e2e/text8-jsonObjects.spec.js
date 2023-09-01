
describe('JSON Objects', () => {

    it('JSON objects', () => {
        cy.openHomePage()

        const simpleObject = { "key": "value", "key2": "value2" }

        const simpleArrayOfValues = [ "one", "two", "three" ]

        const arrayOfObjects = [ {"key": "value"}, {"key2": "value2"}, {"key3": "value3"} ]

        const typesOfData = { "string": "this is a string", "number": 13 } 

        const mix = {
            "FirstName": "Percy",
            "LastName": "Jackson",
            "Age": 14,
            "Friends": [
                {
                    "firstName": "Nico",
                    "lastName": "di Angelo"
                },
                {
                    "firstName": "Thalia",
                    "lastName": "Grace"
                },
            ]
        }

        // Printing data
        console.log(simpleObject.key2) // .key
        console.log(simpleObject["key2"]) // ["key"]
        console.log(simpleArrayOfValues[1]) // [index]
        console.log(arrayOfObjects[2].key3) // [index].key
        console.log(mix.Friends[0].firstName) // [index].key

        const lastNameOfSecondFriend = mix.Friends[1].lastName
    })
})


// npm start to run UI
// npx cypress open to run cypress