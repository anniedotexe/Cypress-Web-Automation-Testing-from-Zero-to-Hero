// node lesson5.js - run this command in terminal to run code

// 1. Logical "AND" Operator - &&
console.log("Logical 'AND' Operator") 

// All values have to be TRUE for the expression to be TRUE
console.log(true && true) 
console.log(true && false) 

// 2. Logical "OR" Operator - ||
console.log("Logical 'OR' Operator") 

// Any values can be TRUE for the expression to be TRUE
console.log(true || true) 
console.log(true || false) 
console.log(false || false) 

var ageOverEighteen = false
var isCitizen = true
var eligibleForLicense = ageOverEighteen && isCitizen
console.log('This customer is eligible for a Drivers License: ' + eligibleForLicense)

// 3. Logical "NOT" Operator - !
console.log("Logical 'NOT' Operator")
console.log(!true)
console.log(6 == 10)
console.log(6 !== 10) // True because they are not equal
