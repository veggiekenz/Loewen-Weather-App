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

function displayForecast() {
    let forecastElement = document.querySelector("#forecast");
    
    let days = ["Sun", "Mon", "Tues"];

    let forecastHTML = `<div class="row">`;
    days.forEach(function (day) {
        forecastHTML = forecastHTML + `
                    <div class="col-2">
                        <div class="weather-forecast-date">
                        ${day}</div>
                         <img src="src/download.png" alt="dummy image" width="42"/>
                        <div class="weather-forecast-temperatures">
                            <span class="weather-forecast-temperature-max"> 18° </span>
                            <span class="weather-forecast-temperature-min"> 12° </span>
                        </div>
                    </div>
                    `;
         });
    forecastHTML= forecastHTML + `</div>`;
    forecastElement.innerHTML = forecastHTML;
}

function displayTemperature(response) {
    let celciusElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptor = document.querySelector("#descriptor");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let iconElement = document.querySelector("#icon");

    celciusTemperature = response.data.main.temp

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

function showImperialTemp(event) {
    event.preventDefault();
    let imperialTemperature = (celciusTemperature * 9)/ 5 +32;
    let tempElement = document.querySelector("#temperature");
    celciusLink.classList.remove("active");
    imperialLink.classList.add("active");
    tempElement.innerHTML = Math.round(imperialTemperature); 
    }

function showCelciusTemp(event) {
    event.preventDefault();
    celciusLink.classList.add("active");
    imperialLink.classList.remove("active");
    let celcTempElement = document.querySelector("#temperature");
    celcTempElement.innerHTML = Math.round(celciusTemperature);
}

let celciusTemperature = null;

let form = document.querySelector("#city-form");
form.addEventListener("submit", handleSubmit);

let imperialLink = document.querySelector("#imperial");
imperialLink.addEventListener("click", showImperialTemp);

let celciusLink = document.querySelector("#celcius");
celciusLink.addEventListener("click", showCelciusTemp);


search("Phoenix");
