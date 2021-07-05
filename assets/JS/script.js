var userFormEl = document.querySelector('#user-form');
var getWeatherBtn = document.getElementById(`getweather`);
var currentEl = document.getElementById(`active`)
var apiKey = "4f85dc9c3f81dd9dc3c9df75d407bc88";
var currentTime = moment().format(`MMMM Do, YYYY LT`)
var dayOfWeek = moment().format(`dddd`);
var weatherWindow = document.getElementById(`weather`);


var userInput = document.getElementById(`cityname`);


function getWeatherToday() {
    if (weatherWindow.style.display !== `block`) {
        weatherWindow.style.display = `block`;
    }
    var cityName = userInput.value;
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=` + cityName + `&appid=` + apiKey + `&units=imperial`;
    fetch(apiUrl)
        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // Grabbing the sections that need to be changed
            var today = document.querySelector(`.today`);
            var tempToday = document.querySelector(`.temptoday`);
            var windToday = document.querySelector(`.windtoday`);
            var humidToday = document.querySelector(`.humidtoday`);
            // Setting the context of each section to the values within the api
            today.textContent = data.name + ` ` + currentTime;
            tempToday.textContent = `Temperature: ` + data.main.temp + `\u00B0 F`;
            windToday.textContent = `Wind Speed: ` + data.wind.speed + ` MPH`;
            humidToday.textContent = `Humidity: ` + data.main.humidity + `%`;
        }
        })
}
function getFiveDay() {
    var cityName = userInput.value;
    var apiUrlFiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=` + cityName + `&appid=` + apiKey + `&units=imperial`;
    fetch(apiUrlFiveDay)
        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var dayOne = document.querySelector(`.day1`);
            var tempOne = document.querySelector(`.temp1`);
            var windOne = document.querySelector(`.wind1`);
            var humidOne = document.querySelector(`.humid1`);
            // Setting the context of each section to the values within the api
            dayOne.textContent = dayOfWeek;
            tempOne.textContent = `Temp: ` + data.list[1].main.temp + `\u00B0 F`;
            windOne.textContent = `Wind: ` + data.list[1].wind.speed + ` MPH`;
            humidOne.textContent = `Humid: ` + data.list[1].main.humidity + `%`;
            //day 2
            var dayTwo = document.querySelector(`.day2`);
            var tempTwo = document.querySelector(`.temp2`);
            var windTwo = document.querySelector(`.wind2`);
            var humidTwo = document.querySelector(`.humid2`);
            // Setting the context of each section to the values within the api
            dayTwo.textContent = dayOfWeek;
            tempTwo.textContent = `Temp: ` + data.list[9].main.temp + `\u00B0 F`;
            windTwo.textContent = `Wind: ` + data.list[9].wind.speed + ` MPH`;
            humidTwo.textContent = `Humid: ` + data.list[9].main.humidity + `%`;
            // day3
            var dayThree = document.querySelector(`.day3`);
            var tempThree = document.querySelector(`.temp3`);
            var windThree = document.querySelector(`.wind3`);
            var humidThree = document.querySelector(`.humid3`);
            // Setting the context of each section to the values within the api
            dayThree.textContent = dayOfWeek;
            tempThree.textContent = `Temp: ` + data.list[17].main.temp + `\u00B0 F`;
            windThree.textContent = `Wind: ` + data.list[17].wind.speed + ` MPH`;
            humidThree.textContent = `Humid: ` + data.list[17].main.humidity + `%`;
            //day 4
            var dayFour = document.querySelector(`.day4`);
            var tempFour = document.querySelector(`.temp4`);
            var windFour = document.querySelector(`.wind4`);
            var humidFour = document.querySelector(`.humid4`);
            // Setting the context of each section to the values within the api
            dayFour.textContent = dayOfWeek;
            tempFour.textContent = `Temp: ` + data.list[25].main.temp + `\u00B0 F`;
            windFour.textContent = `Wind: ` + data.list[25].wind.speed + ` MPH`;
            humidFour.textContent = `Humid: ` + data.list[25].main.humidity + `%`;
            // day5
            var dayFive = document.querySelector(`.day5`);
            var tempFive = document.querySelector(`.temp5`);
            var windFive = document.querySelector(`.wind5`);
            var humidFive = document.querySelector(`.humid5`);
            // Setting the context of each section to the values within the api
            dayFive.textContent = dayOfWeek;
            tempFive.textContent = `Temp: ` + data.list[33].main.temp + `\u00B0 F`;
            windFive.textContent = `Wind: ` + data.list[33].wind.speed + ` MPH`;
            humidFive.textContent = `Humid: ` + data.list[33].main.humidity + `%`;
        })
}
getWeatherBtn.addEventListener(`click`, getWeatherToday);
getWeatherBtn.addEventListener(`click`, getFiveDay);

