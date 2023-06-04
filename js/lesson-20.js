// API - Application Programming Interface
// Servers that are created for serving data for external use (in websites or apps)

const BASE_URL = 'http://api.weatherapi.com/v1';
const CURRENT_WEATHER = "/current.json";
const API_KEY = "05d0b4029c2947ceb05162824230406";
const QUERY = "lagos";
const REQUEST_URL = `${BASE_URL}${CURRENT_WEATHER}?key=${API_KEY}&q=${QUERY}`;

const apiResponse = document.getElementById("apiResponse")
const image = document.getElementById("image")
const weatherLocation = document.getElementById("location")
const locationText = document.createElement('p');

fetch(REQUEST_URL)
	.then(response => response.json())
	.then(data => {
		console.log(data)
		image.setAttribute("src", data.current.condition.icon)
		locationText.innerText = `${data.location.region}, ${data.location.country}`
		weatherLocation.appendChild(locationText)
	});
