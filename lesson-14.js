// DESTRUCTURING
// objects

const person = {
	name: "Ishaya",
	company: "The Bulb Africa",
	dept: "Engineering",
	location: {
		street: "washington street",
		city: "afghanistan",
		country: "netherlands",
	},
	favorites: {
		food: {
			local: "jollof",
			global: "sharwarma",
		},
		drink: "soft"
	}
}

const favoriteGlobal = person.favorites.food.global

const {
	location: {
		country
	}
} = person

console.log(country)
console.log(country)
console.log(country)
console.log(country)

console.log(person.favorites.food.global)
console.log(person.favorites.food.global)
console.log(person.favorites.food.global)

console.log()

console.log(country)

console.log(favoriteGlobal)

const yourCountry = ({ location: { country } }) => `you are from ${country}`

const sayHi = ({
	name,
	location: {
		street
	}
}) => `Hi ${name} do you live on ${street}?`

console.log(sayHi(person))

console.log(yourCountry(person))

// const person = {
// 	name: "Ishaya",
// 	company: "The Bulb Africa",
// 	dept: "Engineering",
// 	location: {
// 		street: "washington street",
// 		city: "afghanistan",
// 		country: "netherlands",
// 	},
// 	favorites: {
// 		food: {
// 			local: "jollof",
// 			global: "sharwarma",
// 		},
// 		drink: "soft"
// 	}
// }

// extract drink, name and local food from the object and 
// put it in a sentence

// ANSWER

