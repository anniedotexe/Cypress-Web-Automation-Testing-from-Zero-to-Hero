// node lesson2.js - run this command in terminal to run code

// 1. Concatination
var price = 2
var item = "Donut"
var messageToPrint = "The price for the Donut is 2 dollars."
console.log(messageToPrint)

console.log("Concatination")
messageToPrint = "The price for the "+ item + " is " + price + " dollars."
console.log(messageToPrint)

// 12. Interpolation
console.log("Interpolation")
var messageToPrint2 = `The price for the ${item} is ${price} dollars.`
console.log(messageToPrint2)
