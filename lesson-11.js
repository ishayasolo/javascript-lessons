// RECAP OF LAST LESSON

// two very important array methods
// - .map()
// returns a brand new array with each array item
// based off the expression in the callback

// - .filter()
// returns a brand new array
// that does not include the item you specify in the callback

const peopleData = [
  {
    name: 'Ishaya',
    score: 40,
    transactionLimit: 100000,
  },
  {
    name: 'Favour',
    score: 30,
    transactionLimit: 100000,
  },
  {
    name: 'Faith',
    score: 60,
    transactionLimit: 100000,
  },
];

const scores = [20, 40, 55]

// JSON.stringify(object)

// exercise - add 20 to the each person's score

// debug this function
function add20ToScore(person) {
  return {
		...person,
		score: person.score + 20
	}
}

const newPeopleData = peopleData.map(add20ToScore);
console.log(newPeopleData);

console.log(add20ToScore({
	name: 'Faith',
	score: 60,
	transactionLimit: 100000,
}))

// expected output
// [
//   {
//     name: 'Ishaya',
//     score: 60,
//     transactionLimit: 100000,
//   },
//   {
//     name: 'Favour',
//     score: 50,
//     transactionLimit: 100000,
//   },
//   {
//     name: 'Faith',
//     score: 80,
//     transactionLimit: 100000,
//   },
// ];

const numbers = [1, 2, 3, 4];
const secondGroupOfNumbers = [5, 6, 7, 8, 9];
const thirdGroupOfNumbers = [10, 11, 12, 13, 14];
let allNumbers1 = [];
let allNumbers2 = [];

// .concat() operation
allNumbers1 = numbers.concat(secondGroupOfNumbers, thirdGroupOfNumbers)
console.log(allNumbers1)

// spread operation (...)
allNumbers2 = [
	...numbers,
	...secondGroupOfNumbers,
	...thirdGroupOfNumbers
]
console.log(allNumbers2)

const person = {
	name: "Ishaya",
	course: "Javascript",
	lesson: 11,
}

const personExt = {
	student: "Favour",
	level: "Beginner"
}

const totalData = {
	...person,
	...personExt
}

console.log(totalData)


// EXERCISES

// 1. given the array [60, 65, 70, 33, 15] use .map() to return a new array with 20 added to each number  
// 2. given the array [
//	{ name: "Ishaya", salary: "500" }, 
//	{ name: "Favour", salary: "600" }, 
//	{ name: "Timothy", salary: "450" }, 
// ]
//  return a new array and subtract 120 from each salary