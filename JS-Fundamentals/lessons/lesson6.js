// node lesson6.js - run this command in terminal to run code

// 1. Conditional Statement
var condition = true

// If condition is true
if(condition) {
    // Execute this code
    console.log("Condition is true")
}
else {
    // Execute this code
    console.log("Condition is false")
}

// If hour is between 6 - 12, print "Good Morning"
// If hour is between 12 - 18, print "Good Afternoon"
// Otherwise, print "Good Evening"
var hour = 15

if (hour >= 6 && hour < 12) {
    console.log("Good Morning")
}
else if (hour >= 12 && hour < 18) {
    console.log("Good Afternoon")
}
else {
    console.log("Good Evening")
}

var ageOverEighteen = true
var isCitizen = true

if (ageOverEighteen && isCitizen) {
    console.log("Customer is eligible for a Drivers License")
}
else {
    console.log("Customer is NOT eligible for a Drivers License")
}