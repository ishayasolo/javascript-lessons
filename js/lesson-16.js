const handleButtonClick = () => {
	console.log('--------------------------')
	console.log('you just clicked a button!');
	console.log('--------------------------')
	alert('this alert came from the button you clicked!');
};

const button = document.getElementById("clickie");

// button.onclick = handleButtonClick;
button.onclick = () => alert('third button');

button.addEventListener('click', handleButtonClick);

// INPUT (focus, blur)
// querySelector (
// 	# - selecting IDs
// 	. - selecting classes
// )
const textInput = document.querySelector('#name');
const textValue1 = document.querySelector('#textValue1')
const textValue2 = document.querySelector('#textValue2')
// innerHTML - allows you to type semantic html into your node
// innerText - allows you to type only plain text into your node

textInput.addEventListener('focus', () => {
	console.log('you have focused on the text input');
})

textInput.addEventListener('change', (event) => {
	console.log('you made a change to the input');
	textValue1.innerHTML = `<h1>${event.target.value}</h1>`
	textValue2.innerText = event.target.value
})

textInput.addEventListener('blur', () => {
	console.log('you have left the text input you were typing in');
})

const buttonParent = document.getElementById('buttonParent');
const arrayOfButtons = buttonParent.querySelectorAll('button')

for (let i = 0; i < arrayOfButtons.length; i++) {
	arrayOfButtons[i].addEventListener('click', (event) => {
		console.log({
			id: event.target.id,
			value: event.target.value,
		})
	})
}