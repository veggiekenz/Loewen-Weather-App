let now = new Date();
let day = now.getDay();
let month = now.getMonth();
let date = now.getDate();
let hours = now.getHours();
    if (hours < 10) {
    hours = `0${hours}`;
    }
let minutes = now.getMinutes();
    if (minutes < 10) {
    minutes = `0${minutes}`;
    }
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    ];
let dayOfWeek = days[now.getDay()];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
    ];
let currentMonth = months[now.getMonth()];
let currentTime = `${hours}:${minutes}`;

currentDate.innerHTML = `${dayOfWeek}, ${currentMonth} ${date}`;
time.innerHTML = `${currentTime}`;

function displayTemperature(response) {
    let celciusElement = document.querySelector("#celcius");
    let cityElement = document.querySelector("#city");
    let descriptor = document.querySelector("#descriptor");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let iconElement = document.querySelector("#icon");

    celciusElement.innerHTML = Math.round
    (response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptor.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round (response.data.wind.speed);
    iconElement.setAttribute(
        "src", 
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute(
        "alt", 
        `http://openweathermap.org/img/wn/${response.data.weather[0].description}@2x.png`);
    }

function search(city) {
    let apiKey = "024eca5cf1cd2fe74cef469e2a03433b";
    let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiEndPoint}?q=${city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(displayTemperature);
    }


function handleSubmit(event) {
    event.preventDefault();
    let cityElement = document.querySelector("#city-search");
    search(cityElement.value);
}

search("Phoenix");

let form = document.querySelector("#city-form");
form.addEventListener("submit", handleSubmit);
