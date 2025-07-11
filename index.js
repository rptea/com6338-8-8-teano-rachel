// Your code here

// On page load
// DOM elements
var form = document.querySelector("form");
var input = document.getElementById("weather-search");
var weatherSection = document.getElementById("weather");

// Event listener to form for "submit"
form.addEventListener("submit", function (e){
    e.preventDefault();

    // Clear previous weather data
    weatherSection.innerHTML="";
    // Get user's search input - city name
    var location = input.value.trim();
    // If input is empty, stop function
    if (location === "") return;
    // Reset input value to empty string
    input.value = "";
    // Call fetchWeatherData() with user's input
    fetchWeatherData(location);    
});

function fetchWeatherData(locaiton) {
    // Build URL to request weather data
    var apiKey = "721783f86b3969993c78fb01e288d8f7";
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather";
    var queryString = `?units=imperial&appid=${apiKey}&q=${location}`;
    var url = weatherURL + queryString;

    // fetch() to make the request
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Location not found");
            }
            return response.json();
        })
        // Pass successful data to another function to display it
        .then((data) => { 
            displayWeatherInfo(data);
        })
        // Handle issues
        .catch((error) => {
            showError();
        });
}
// API URL:

// Use fetch() to call API

// Convert response to JSON

// If response is successful  (200 OK):
    // call displayWeatherInfor() and pass the data
// If not: 
    // Call showError() to display "Location not found"


// Display weather information
// Destructure required data fromt he response
    // city, country
    // coordinates (lat, lon)
    // weather description and icon code
    // last updated timestamp

// Create elements and add:
    // <h2>City, Country</h2>
    // <a>link to Google Maps using coords
    // <img> for weather icon using icon code
    // <p> with weather description
    // <p> with actual temp
    // <p> feels like temp
    // <p> with "Last updated: timeString"

// Append all these elements to the #weather section


// Show error for invalid location
// Clear the weather section
//add <h2> that says "location not found"


// Format last updated time
// Conver UNIX timstand (dt) to milliseconds
// Pass into new Date()
// Use .toLocaleTimeString() to get readable time string