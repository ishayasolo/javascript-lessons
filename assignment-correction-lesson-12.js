// EXERCISES

// 1. given the array [60, 65, 70, 33, 15] use .map() to return a new array with 20 added to each number
// 2. given the array [
//	{ name: "Ishaya", salary: "500" },
//	{ name: "Favour", salary: "600" },
//	{ name: "Timothy", salary: "450" },
// ]
//  return a new array and subtract 120 from each salary

// SOLUTION

const numbers = [60, 65, 70, 33, 15];
console.log(numbers.map(num => num + 20));

const people = [
  { name: 'Ishaya', salary: '500' },
  { name: 'Favour', salary: '600' },
  { name: 'Timothy', salary: '450' },
];

console.log(people.map(income => ({
	...income,
	salary: income.salary - 120
})))