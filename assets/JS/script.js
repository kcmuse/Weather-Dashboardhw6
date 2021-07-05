var userFormEl = document.querySelector('#user-form');
var getWeatherBtn = document.querySelector(`#getweather`);
var currentEl = document.querySelector(`#active`);
var apiKey = "4f85dc9c3f81dd9dc3c9df75d407bc88";


var userInput = document.querySelector(`#cityname`);

var formSubmitHandler = function (event) {
    event.preventDefault();

    var cityname = userInput.value.trim();

    if (cityname) {
        getWeatherToday(cityname);
        getFiveDay(cityname);

        currentEl.textContent = '';
        userInput.value = '';
    } else {
        currentEl.textContent = `Please Enter a City`
    }
};

var getWeatherToday = function (city) {
    var apiUrl = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayToday(data, user);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
}

var displayToday = function () {
    
    
}

var getFiveDay = function(){
    var apiUrl = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial";
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayFiveDay(data, user);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
}

var displayFiveDay = function(){




}
userFormEl.addEventListener(`submit`, formSubmitHandler)
