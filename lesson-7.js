// LOOPS
// for loops
// 1. define starting point
// 2. define limit/condition
// 3. define iterator
// while loop
// infinite loop - loop that doesn't end

// 1 2 3 4 5 6 7 8 9

// console.log(1);
// console.log(2);
// console.log(3);

let num = 2;

const array = [2, 4, 6, 8, 10];
// console.log(array[4]);
// console.log(array[num]);

for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

const fromOneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index < fromOneToTen.length; index++) {
//   if (fromOneToTen[index] % 2 === 0) {
//     console.log(`${fromOneToTen[index]} is an even number`);
//   } else {
//     console.log(`${fromOneToTen[index]} is an odd number`);
//   }
// }

let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

console.log(`The first day of the week is ${daysOfTheWeek[0]}`)

console.log("The working days of the week are;")
for (let index = 1; index < daysOfTheWeek.length - 1; index++) {
	console.log(daysOfTheWeek[index])
}
console.log(`The best day of the week is ${daysOfTheWeek[daysOfTheWeek.length - 1]}`)
// console.log(index)

// console.log(array[0]);
// console.log(array[2]);
// console.log(array[4]);
// console.log(array[5]);

let limit = 5;

let count = 1;

while (count <= 5) {
	console.log(count)
	++count
}
