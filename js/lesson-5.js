// more functions!!!

function add(a, b) {
	return a + b;
}
function subtract(a, b) {
	return a - b;
}
function divide(a, b) {
	return a / b;
}
function multiply(a, b) {
	return a * b;
}


function calculator(firstNumber = 1, secondNumber = 1) {
	const sum = add(firstNumber, secondNumber)
	const diff = subtract(firstNumber, secondNumber)
	const quotient = divide(firstNumber, secondNumber)
	const product = multiply(firstNumber, secondNumber)

	console.log(`the sum of ${firstNumber} and ${secondNumber} is ${sum}`)
	console.log(`the difference between ${firstNumber} and ${secondNumber} is ${diff}`)
	console.log(`the quotient of ${firstNumber} and ${secondNumber} is ${quotient}`)
	console.log(`the product of ${firstNumber} and ${secondNumber} is ${product}`)
}

const nums = [10, 2]

calculator(nums[1], nums[0])
// calculator()

// Array - collection

const scores = [75, 60, 30, 100, 98]

console.log(`first student score: ${scores[0]}%`)
console.log(`second student score: ${scores[1]}%`)
console.log(`third student score: ${scores[2]}%`)
console.log(`fourth student score: ${scores[3]}%`)
console.log(`fifth student score: ${scores[4]}%`)

const names = ['Ishaya', 'Favour', 'Faith', 'Freeborn', 'David', 50]

console.log(`first person's name: ${names[0]}`)
console.log(`second person's name: ${names[1]}`)
console.log(`third person's name: ${names[2]}`)
console.log(`fourth person's name: ${names[3]}`)
console.log(`fifth person's name: ${names[4]}`)
console.log(`sixth person's score: ${names[5]}`)

console.log(`the sum of the first three scores are ${scores[0] + scores[1] + scores[2]}`)
