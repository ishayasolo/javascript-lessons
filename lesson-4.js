function printSum(a, b, c = 10) {
  const sum = a + b + c;
  const output = `the sum of ${a} and ${b} and ${c} is ${sum}`;

  return output;
}

console.log(printSum(12, 5, 6))

console.log(printSum(10, 5, 3))


function greeting(person = 'stranger') {
	return `hello ${person}... it's nice to meet you!`
}

const anything = greeting('Favour')

console.log(anything)
console.log(greeting('Ishaya'))

function multiply(a = 1, b = 1) {
	console.log(`${a} x ${b} = ${a * b}`)
}

const mul = multiply(2, 5)
console.log(mul)