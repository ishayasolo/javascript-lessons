let names = ['Adam', 'Eve', 'Jacob', 'Isaac'];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// even numbers between 2 and 20
const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

console.log(evenNumbers[2]);

// for (let i = 0; i < evenNumbers.length; i++) {
//   console.log(evenNumbers[i]);
// }

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

for (let i = 1; i < 20; i += 2) {
  console.log(i);
}

// fill up the following arrays according to their names
let oddNumbersLessThan1000 = [];
let evenNumbersLessThan1000 = [];

console.log(oddNumbersLessThan1000);
console.log(evenNumbersLessThan1000);

for (let index = 0; index < 500; index++) {
  if (index % 2 === 0) {
    evenNumbersLessThan1000.push(index);
  } else {
    oddNumbersLessThan1000.push(index);
  }
}

console.log(oddNumbersLessThan1000);
console.log(evenNumbersLessThan1000);

let tutor = {
  name: 'Ishaya',
  course: 'JavaScript',
  mode: 'Virtual',
};

let student = {
  name: 'Favour',
  course: 'JavaScript',
  mode: 'Virtual',
};

let data = [tutor, student];

console.log(data);

for (let index = 0; index < data.length; index++) {
  console.log(
    `${index + 1}. Name: ${data[index].name}, Course: ${
      data[index].course
    }, Mode: ${data[index].mode}`
  );
}


// console.log(newArray)

// 1. Name: Ishaya, Course: Javascript, Mode: Virtual
// 2. Name: Favour, Course: Javascript, Mode: Virtual
