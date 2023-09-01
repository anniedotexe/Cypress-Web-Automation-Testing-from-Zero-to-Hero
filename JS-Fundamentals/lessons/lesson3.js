// node lesson3.js - run this command in terminal to run code

// 1. Objects
var customer = {
    firstName: "Percy",
    lastName: "Jackson",
    cars: ["Audi", "Lamborghini", "Subaru"]
}
console.log(customer)

// Dot Notation
console.log("Dot Notation")
customer.firstName
console.log(customer.firstName)
console.log(customer.lastName)

// Bracket Notation
console.log("Bracket Notation")
customer['lastName'] = "Seaweed Brain"
console.log(`${customer.firstName} ${customer.lastName}`)

// 2. Arrays
console.log("Arrays")
var car = ["Audi", "Lamborghini", "Subaru"] // Array Index 0,1,2
console.log(car[0]) // Audi
console.log(car[2]) // Subaru
car[2] = "BMW"
console.log(car[2]) // BMW

console.log(customer.cars[1])