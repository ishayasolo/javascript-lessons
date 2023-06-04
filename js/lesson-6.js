// *** ARRAYS ***
// Changing Elements
// Length of an array

// USEFUL AND MOST USED ARRAY METHODS
// push() - adds item(s) to the end of the array
// unshift() - adds item(s) to the beginning of the array
// pop() - removes one item at the end of the array
// shift() - removes one item at the beginning of the array
// toString() - converts all items in the array to a string of comma-separated values
// join() - converts all items in the array to a string of custom-separated values
// concat() - joins multiple arrays together

// coming soon
// slice() and splice()

// undefined holes

let scores = []
scores[0] = 80
scores[2] = 75
console.log(scores.length)
scores[3] = 45
scores[1] = 35

console.log(scores)

// push() - adds item(s) to the end of the array
scores.push(90)
console.log(scores)

scores.push(72, 59)
console.log(scores)

scores.push(72, 59, 67, 88)
console.log(scores)

// unshift() - adds item(s) to the beginning of the array
scores.unshift(33)
console.log(scores)

console.log(scores.unshift(99))
console.log(scores)

scores.unshift(99, 74, 33, 0)
console.log(scores)

// pop() - removes one item at the end of the array
scores.pop()
console.log(scores)

console.log(scores.pop())
console.log(scores)

// shift() - removes one item at the beginning of the array
scores.shift()
console.log(scores)

console.log(scores.shift())
console.log(scores)

// toString() - converts all items in the array to a string of comma-separated values
const stringifiedArray = scores.toString()
console.log(`stringified array = ${stringifiedArray}`)

// join() - converts all items in the array to a string of custom-separated values
const anotherStringifiedValue = scores.join(" - ")
console.log(`stringified array = ${anotherStringifiedValue}`)


// concat() - joins multiple arrays together
let staffList = []
let productTeam = []

const engineeringTeam = ["Adam", "Ishaya", "Favour", "Deborah"]
const designTeam = ["Daniel", "Oscar", "Chinyere", "Isaac", "Sandra"]
const hrTeam = ["Akintayo", "Faith"]
const cleaners = ["Joseph", "Tony", "Timothy"]

productTeam = engineeringTeam.concat(designTeam)
console.log(productTeam)
console.log(engineeringTeam)

staffList = productTeam.concat(hrTeam, cleaners, ["newPerson1", "newPerson2"])
console.log(staffList)





// deviation
function addTwoNumbers(number1, number2) {
	return number1 + number2
}

const sum = addTwoNumbers(4, 6)
console.log(sum);

console.log(typeof staffList)

const personName = "Ishaya"
console.log(personName.toUpperCase())