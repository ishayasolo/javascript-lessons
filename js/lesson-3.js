// comparison

// conditional using if...else
let dayOfTheWeek = "Monday";

if (dayOfTheWeek === 'Monday') {
	console.log('Today is ' + dayOfTheWeek)
} else if (dayOfTheWeek === 'Tuesday') {
	console.log('Today is ' + dayOfTheWeek)
} else if (dayOfTheWeek === 'Wednesday') {
	console.log('Today is ' + dayOfTheWeek)
} else if (dayOfTheWeek === 'Thursday') {
	console.log('Today is ' + dayOfTheWeek)
} else if (dayOfTheWeek === 'Friday') {
	console.log('Today is ' + dayOfTheWeek)
} else if (dayOfTheWeek === 'Saturday') {
	console.log('Today is ' + dayOfTheWeek)
} else if (dayOfTheWeek === 'Sunday') {
	console.log('Today is ' + dayOfTheWeek)
} else {
	console.log("It's a brand new day!")
}

// conditional using switch-case
switch (dayOfTheWeek) {
	case 'Monday':
	case 'Tuesday':
	case 'Wednesday':
		console.log("hurray...it's not yet thursday")
	case 'Thursday':
	case 'Friday':
	case 'Saturday':
	case 'Sunday':
		console.log('Today is ' + dayOfTheWeek);
		break;

	default:
		console.log('invalid day of the week!')
}

// ternary
const gender = 'female'
const greeting = gender === "male" ? "Good day bro" : "Good day sis"

console.log(false ? 'I am honest' : 'I am not honest')


if (gender === "male") {
	console.log("Good day bro!");
} else {
	console.log("Good day sis!");
}

// console.log(gender === "male" ? "Good day bro" : "Good day sis")
console.log(greeting)


// strings
let name = "Ishaya"
console.log(name)

let profession = "frontend developer"
console.log(profession)

let intro = name + " is a " + profession
console.log(intro);

// interpolation - string literals

intro = `${name} is a ${profession}`
console.log(intro);