// OBJECTS - are standalone entities that carry information about the properties
// of the object and values of those properties.
// takeaway - all objects have a "property: value" pair

// examples of objects
// cup - has properties
// size: small, medium, large
// color: blue, yellow, black, white
// type: plastic, ceramic, glass 

// person - has properties
// name: Adam, Eve, Favour
// height: 178cm
// skinTone: dark, light
// gender: male, female
// hairColor: black, brown, white

// two ways of creating javascript objects
// 1. object constructor
const cup = new Object();

console.log(cup)

cup.size = "small";
console.log(cup)
cup.color = "white";
console.log(cup)
cup.type = "ceramic"
console.log(cup)


// 2. object literal >>>
const person = {
	name: "Adam",
	height: 176,
	skinTone: "Dark",
	gender: "Male",
	hairColor: "Black",
	isNigerian: false,
	displayInfo: function() {
		return(`${person.name} is a ${person.skinTone} skinned ${person.gender}, he is ${person.height}cm tall, he has a ${person.hairColor} hair and ${person.isNigerian ? "he is nigerian" : "he is not a nigerian"}`)
	},
	courses: ["JavaScript", "React", "Typescript"],
	// nesting
	school: {
		name: "University of Colorado",
		location: "Mushin",
	}
}

console.log(typeof person.height)
console.log(typeof person.height.toString())

person.favColor = "green"

console.log(person["name"])

console.log(person)
person.displayInfo()
console.log(person.displayInfo())

console.log(person.school.name)
console.log(person.school.location)

console.log(`${person.name} goes to ${person.school.name} and his school is located in ${person.school.location}`)

// const courses = ["JavaScript", "React", "Typescript"]
console.log(person.courses[1])

if (person.isNigerian) {
	console.log("he is nigerian")
} else {
	console.log("he is not a nigerian")
}

console.log(person.isNigerian ? "he is nigerian" : "he is not a nigerian")

console.log(person)

console.log(person.height)
console.log(typeof person.height)
console.log(person.isNigerian)
console.log(typeof person.isNigerian)
console.log(person.name)
console.log(typeof person.name)


const total = 100
const exam = 0
const test = 30
const attendance = 1
// if there is no attendance = 0

if (attendance <= 0) {
	console.log(`grade: ${0}`)
} else {
	if (test > 0) {
		console.log(`you wrote the test`)
		if (exam) {
			console.log(`you wrote the exams`)
		} else {
			console.log(`your script is missing`)
		}
	} else {
		console.log(`you did not write the test`)
	}
}

