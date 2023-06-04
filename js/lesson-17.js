const adder = document.getElementById("adder");
const items = document.getElementById("items");
const input = document.getElementById("itemToAdd");

// type into the input box
// click the "Add Item" button
// append the item to the list of items

input.addEventListener('change', (event) => {
	const li = document.createElement('li');
	li.innerHTML = event.target.value;
	
	adder.addEventListener('click', () => {
		items.appendChild(li);
	});
});
