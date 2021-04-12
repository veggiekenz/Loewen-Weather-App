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

function displayWeatherCondition(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp);
    }


function search(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city").value;
    let units = "imperial";
    let apiKey = "024eca5cf1cd2fe74cef469e2a03433b";
    let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiEndPoint}?q=${cityInput}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeatherCondition);
    }

let form = document.querySelector("#city-input");
form.addEventListener("submit", search);

function showHere(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);

    }

function showPosition(position) {
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let units = "imperial";
    let apiKey = "024eca5cf1cd2fe74cef469e2a03433b";
    let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiEndPoint}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeatherCondition);

    console.log(apirUrl);
    }
