var userFormEl = document.querySelector('#user-form');
var getWeatherBtn = document.getElementById(`getweather`);
var apiKey = "4f85dc9c3f81dd9dc3c9df75d407bc88";
var userInput = document.getElementById(`cityname`);
var hidden = document.querySelector(`#hidden`)
var searchedCities = [];

function getWeatherToday() {
    var cityName = userInput.value;
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=` + cityName + `&appid=` + apiKey + `&units=imperial`;
    fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            var humidity = data.main.humidity;
            var wind = data.wind.speed;
            var temp = data.main.temp_max;
            var currentTime = moment().format(`MMMM Do, YYYY LT`)
            var icon = data.weather[0].icon;
            var iconImg = `http://openweathermap.org/img/wn/${icon}@2x.png`
            var current = document.querySelector(`#current`)
            var card = document.createElement(`div`);
            var cardHeader = document.createElement(`h2`);
            var cardBody = document.createElement(`div`);
            var humid = document.createElement(`p`);
            var temper = document.createElement(`p`);
            var windy = document.createElement(`p`);
            var weatherIcon = document.createElement(`img`);

            current.textContent = ``;

            card.classList.add(`card`, `m-3`, `w-100`);
            cardHeader.classList.add(`card-header`);
            cardBody.classList.add(`card-body`);
            humid.classList.add(`card-text`);
            temper.classList.add(`card-text`);
            windy.classList.add(`card-text`);

            cardHeader.textContent = data.name + ` ` + currentTime;
            humid.textContent = `Humidity: ` + humidity + `%`;
            temper.textContent = `High Temperature: ` + temp + `\u00B0 F`;
            windy.textContent = `Wind Speed: ` + wind + `MPH`;
            weatherIcon.src = iconImg;

            current.appendChild(card);
            card.appendChild(cardHeader);
            card.appendChild(cardBody);
            cardBody.appendChild(weatherIcon);
            cardBody.appendChild(temper);
            cardBody.appendChild(windy);
            cardBody.appendChild(humid);

            getFiveDay(data);

        })

}

function getFiveDay(data) {
    var lat = data.coord.lat;
    var lon = data.coord.lon;
    var city = data.name;
    var apiUrlFiveDay = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}&units=imperial`
    fetch(apiUrlFiveDay)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var daily = data.daily;
            var fiveDay = document.querySelector(`#fiveday`);
            fiveDay.textContent = ``;
            for (var i = 1; i <= daily.length - 3; i++) {
                var date = moment.unix(daily[i].dt).format(`M/D/YY`)
                var humidity = daily[i].humidity;
                var wind = daily[i].wind_speed;
                var temp = daily[i].temp.max;
                var icon = daily[i].weather[0].icon;

                var iconImg = `http://openweathermap.org/img/wn/${icon}.png`

                var card = document.createElement(`div`);
                var cardHeader = document.createElement(`div`);
                var cardBody = document.createElement(`div`);
                var humid = document.createElement(`p`);
                var temper = document.createElement(`p`);
                var windy = document.createElement(`p`);
                var weatherIcon = document.createElement(`img`);

                card.classList.add(`card`, `text-white`, `bg-primary`, `mb-3`, `mx-3`, `cstm-card`);
                cardHeader.classList.add(`card-header`);
                cardBody.classList.add(`card-body`);
                humid.classList.add(`card-text`);
                temper.classList.add(`card-text`);
                windy.classList.add(`card-text`);
                card.style.maxWidth = `18rem`;

                cardHeader.textContent = date;
                humid.textContent = `Humidity: ` + humidity + `%`;
                temper.textContent = `High Temp: ` + temp + `\u00B0 F`;
                windy.textContent = `Wind Speed: ` + wind + `MPH`;
                weatherIcon.src = iconImg;

                fiveDay.appendChild(card);
                card.appendChild(cardHeader);
                card.appendChild(cardBody);
                cardBody.appendChild(weatherIcon);
                cardBody.appendChild(temper);
                cardBody.appendChild(windy);
                cardBody.appendChild(humid);

            }
        })
}

function savedCity() {
    var savedCity = userInput.value.trim();
    var searchHistory = searchedCities;
    window.localStorage.setItem(`city`, JSON.stringify(savedCity));

    var allCities = JSON.parse(window.localStorage.getItem(`city`)) || [];
    console.log(allCities);


    for (var i = 0; i < allCities.length; i++) {
        var history = document.querySelector(`#history`);
        var historyUl = document.createElement(`ul`);
        var historyLi = document.createElement(`li`);
        historyLi.classList.add(`list-group-item`, `list-group-item-action`);
        historyLi.textContent = allCities;

        history.appendChild(historyUl);
        historyUl.appendChild(historyLi);
    }
}

getWeatherBtn.addEventListener(`click`, function() {
    if (userInput) {
        hidden.style = `display: block`
        getWeatherToday();
        // savedCity();
    }
})