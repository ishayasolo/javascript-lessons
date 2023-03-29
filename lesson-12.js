// RECAP OF LAST LESSON

// - .filter()
// returns a brand new array
// that does not include the item you specify in the callback

const grades = [33, 36, 12, 76, 85, 23, 77, 88, 90, 50];

let newGrades = []
for (let index = 0; index < grades.length; index++) {
	if (grades[index] > 35) {
		newGrades.push(grades[index])
	}
}

console.log(newGrades)

// reimplement this using .filter()
const selectPassGrades = (grade) => grade > 35
const arrayOfPasses = grades.filter(selectPassGrades)

console.log(arrayOfPasses)

const attendees = [
	{
		name: "Ishaya",
		age: 12,
	},
	{
		name: "Favour",
		age: 17,
	},
	{
		name: "Faith",
		age: 22,
	},
	{
		name: "Jibola",
		age: 33,
	},
	{
		name: "Cynthia",
		age: 18,
	},
]

const removeAllKids = (person) => person.age >= 18
const adults = attendees.filter(removeAllKids)

console.log(adults)
console.log(attendees)

// exercise
const employees = [
	{
		name: "Ishaya",
		hasIdCard: false,
		hasEmploymentLetter: true
	},
	{
		name: "Favour",
		hasIdCard: true,
		hasEmploymentLetter: true
	},
	{
		name: "Faith",
		hasIdCard: false,
		hasEmploymentLetter: false
	},
	{
		name: "Jibola",
		hasIdCard: true,
		hasEmploymentLetter: false
	},
	{
		name: "Cynthia",
		hasIdCard: false,
		hasEmploymentLetter: false
	},
]

// return a new array that filter employees who do not have an ID card or employment letter
// write your implementation down here

const filterUnserious = employee => employee.hasIdCard || employee.hasEmploymentLetter
const seriousPeople = employees.filter(filterUnserious)
console.log(seriousPeople)