// DESTRUCTURING
// Arrays

const scores = [56, 57, 78, 99, 57, 87];
const ishayaScore = scores[0];
const favourScore = scores[2];
const faithScore = scores[3];

console.log(ishayaScore, faithScore, favourScore);

// step1
// const [] = scores

// step2
// const [ishaya, , favour, faith] = scores
const [ishaya, , favour, faith] = scores;
const [, badmus, , , tunde, femi] = scores;
console.log(ishaya, favour, faith);
console.log(badmus, tunde, femi);

const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const dice = [1, 2, 3, 4, 5, 6];
console.log(shuffleArray(dice));


// destructuring
const random6 = () => {
	const [a, b, c, d, e, f] = shuffleArray(dice)
	return [a, b, c, d, e, f]
}

console.log(random6())
console.log(random6())
console.log(random6())
console.log(random6())