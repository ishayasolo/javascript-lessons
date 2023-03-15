// two very important array methods
// - .map()
// returns a brand new array with each array item
// based off the expression in the callback

// - .filter()
// returns a brand new array
// that does not include the item you specify in the callback

const numbers = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const newNumbers = [];

// print the square of each item within the array
console.log(numbers[5] * numbers[5]);

// traditional for loop
for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index] ** 2);
}

// for..in loop >>
// access to the indices of the array
for (let index in numbers) {
  console.log(index * 2);
}

// for..of loop >>
// access to the items of the array
for (let index of numbers) {
  console.log(index ** 2);
}

console.log(numbers);

function squareEachNumber(number) {
  return number ** 2;
}
const newArray = numbers.map(squareEachNumber);

console.log(newArray);

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
console.log(peopleData[0].score)

function add20ToScore(person) {
	return person.score + 20
}

const newPeopleData = peopleData.map(add20ToScore)
console.log(newPeopleData)
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
