// node lesson8.js - run this command in terminal to run code

// 1. Declarative Functions
console.log("Declarative Functions")

helloOne() // Can call the function to run before the function code is hit

function helloOne() {
    console.log("Hello One")
}

helloOne() // Call the function to run

// 2. Anonymous Function
console.log("Anonymous Function")

// Has no name, set to a variable

// helloTwo() // Will not work when called before the function code is hit

var helloTwo = function() {
    console.log("Hello Two")
}

helloTwo() // Call the function to run

// 3. ES6 Function Syntax (Arrow Function)
console.log("ES6 Function Syntax (Arrow Function)")

// Don't need to type function keyword, put arrow with braces for code to execute
var helloThree = () => {
    console.log("Hello Three")
}

helloThree() // Call the function to run

// 4. Function with Arguments
console.log("Function with Arguments")

function printName1(name) {
    console.log(name)
}

printName1("Percy Jackson") // Call the function with argument to run

function printName2(firstName, lastName) {
    console.log(firstName + " " + lastName)
}

printName2("Thalia", "Grace") // Call the function with arguments to run

// 5. Function with Return
console.log("Function with Return")

function multiplyByTwo(number) {
    var result = number * 2
    return result
}

var answer = multiplyByTwo(23) // Call the function set to a variable
console.log("Result: " + answer) 

// 6. Import Functions
console.log("Import Functions")

import { printAge } from "../helpers/printHelper.js"
printAge(15)

// 7. Import Everything
console.log("Import Everything")

import * as helper from "../helpers/printHelper.js"
helper.printAge(24)