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
    let imperialElement = document.querySelector("#imperial");
    let cityElement = document.querySelector("#city");
    let cloudinessElement = document.querySelector("#cloudiness");
    let humidityElement = document.querySelector("#humidity");
    imperialElement.innerHTML = Math.round
    (response.data.main.temp);
    cityElement.innerHTML = response.data.main.name;
    cloudinessElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    }

let units = "imperial";
let apiKey = "024eca5cf1cd2fe74cef469e2a03433b";
let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
let apiUrl = `${apiEndPoint}?q=Phoenix&appid=${apiKey}&units=${units}`;
    
axios.get(apiUrl).then(displayTemperature);
    