// node lesson7.js - run this command in terminal to run code

// 1. Loops
// Repeat certain operations a number of times

console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")

// For Loop
console.log("For Loop (For i Loop)")

for (let i=0; i<5; i++) {
    console.log("Hello World " + i)
}

// For of Loop
console.log("For of Loop")

var cars = ["Audi", "Lamborghini", "Subaru"]
for(let car of cars) {
    console.log(car)
}

console.log("For of Loop with If Break")

for(let car of cars) {
    console.log(car)
    if (car == "Lamborghini") {
        console.log("Breaking loop at " + car)
        break
    }
}

// ES6 Syntax For Each Loop
console.log("ES6 Syntax For Each Loop")

cars.forEach( car => {
    console.log(car)
})