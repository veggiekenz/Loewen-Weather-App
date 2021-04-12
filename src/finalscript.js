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
    let cloudiness = document.querySelectorAll("#cloudiness");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let iconElement = document.querySelector("#icon");

    imperialElement.innerHTML = Math.round
    (response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    cloudiness.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round (response.data.wind.speed);
    iconElement.setAttribute(
        "src", 
        'http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png');
    iconElement.setAttribute(
        "alt", 
        'http://openweathermap.org/img/wn/${response.data.weather[0].description}@2x.png');
    }

let units = "imperial";
let apiKey = "024eca5cf1cd2fe74cef469e2a03433b";
let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
let apiUrl = `${apiEndPoint}?q=Phoenix&appid=${apiKey}&units=${units}`;
    
axios.get(apiUrl).then(displayTemperature);
    