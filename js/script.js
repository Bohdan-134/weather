const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const degree = document.getElementById("degree");
const city = document.getElementById("city");
const imgStatus = document.getElementById("img-status");
const clouds = document.getElementById("clouds");
const minTemp = document.getElementById("min-temp");
const maxTemp = document.getElementById("max-temp");
const humidity = document.getElementById("humidity");
const country = document.getElementById("country");

/* date */
const nameDay = document.getElementById("date-nameDay");
const numDay = document.getElementById("date-numDay");
const nameMonth = document.getElementById("date-nameMonth");
const numYear = document.getElementById("date-numYear");

let date = new Date();

const month = ["Jan ", "Feb ", "Mar ", "Apr ", "May ", "June ", "July ", "Aug ", "Sept ", "Oct ", "Nov ", "Dec "];
const days = ["Monday, ", "Tuesday, ", "Wednesday, ", "Thursday, ", "Friday, ", "Saturday, ", "Sunday, "];

window.onload = function() {
    /*   setInterval(background(), 60000); */
    weatherAPI();
    if (date.getDay() == 1) {
        nameDay.innerHTML = days[0];
    } else if (date.getDay() == 2) {
        nameDay.innerHTML = days[1];
    } else if (date.getDay() == 3) {
        nameDay.innerHTML = days[2];
    } else if (date.getDay() == 4) {
        nameDay.innerHTML = days[3];
    } else if (date.getDay() == 5) {
        nameDay.innerHTML = days[4];
    } else if (date.getDay() == 6) {
        nameDay.innerHTML = days[5];
    } else if (date.getDay() == 7) {
        nameDay.innerHTML = days[6];
    }
    numDay.innerHTML = date.getDate();
    if (date.getMonth() == 0) {
        nameMonth.innerHTML = month[0];
    } else if (date.getMonth() == 1) {
        nameMonth.innerHTML = month[1];
    } else if (date.getMonth() == 2) {
        nameMonth.innerHTML = month[2];
    } else if (date.getMonth() == 3) {
        nameMonth.innerHTML = month[3];
    } else if (date.getMonth() == 4) {
        nameMonth.innerHTML = month[4];
    } else if (date.getMonth() == 5) {
        nameMonth.innerHTML = month[5];
    } else if (date.getMonth() == 6) {
        nameMonth.innerHTML = month[6];
    } else if (date.getMonth() == 7) {
        nameMonth.innerHTML = month[7];
    } else if (date.getMonth() == 8) {
        nameMonth.innerHTML = month[8];
    } else if (date.getMonth() == 9) {
        nameMonth.innerHTML = month[9];
    } else if (date.getMonth() == 10) {
        nameMonth.innerHTML = month[10];
    } else if (date.getMonth() == 11) {
        nameMonth.innerHTML = month[11];
    }
    numYear.innerHTML = date.getFullYear();
};

/* function background() {
    if (date.getHours() < 6 && date.getHours() >= 0) {
        document.querySelector("body").style.background = "url(../img/night.jpg) no-repeat"
        document.querySelector(".weather-container").style.background = "url(../img/night.jpg) no-repeat"
    } else if (date.getHours() < 12 && date.getHours() >= 6) {
        document.querySelector("body").style.background = "url(../img/morning.jpg) no-repeat"
        document.querySelector(".weather-container").style.background = "url(../img/morning.jpg) no-repeat"
    } else if (date.getHours() < 18 && date.getHours() > 12) {
        document.querySelector("body").style.background = "url(../img/day.jpg) no-repeat"
        document.querySelector(".weather-container").style.background = "url(../img/day.jpg) no-repeat"
    } else if (date.getHours() < 24 && date.getHours() > 18) {
        document.querySelector("body").style.background = "url(../img/evening.jpg) no-repeat"
        document.querySelector(".weather-container").style.background = "url(../img/evening.jpg) no-repeat"
    }
} */

function weatherAPI() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + ",&APPID=f6c00d7bb9d6455fbbd72979940b788e")
        .then(function(resp) { return resp.json() })
        .then(function(data) {
            degree.innerHTML = Math.round(data.main.temp - 273) + "&deg";
            city.textContent = data.name;
            imgStatus.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            clouds.innerHTML = "Clouds: " + data.clouds.all + "%";
            minTemp.innerHTML = "Min-temp: " + Math.round(data.main.temp_min - 273) + "&deg";
            maxTemp.innerHTML = "Max-temp: " + Math.round(data.main.temp_max - 273) + "&deg";
            humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
            country.innerHTML = "Country: " + data.sys.country;
        });
}



searchBtn.onclick = function() {
    weatherAPI();
};


const openInfo = document.getElementById("info");
const closedInfo = document.getElementById("close");

openInfo.onclick = function() {
    document.querySelector(".additional-information-block").style.bottom = "0%";
}

closedInfo.onclick = function() {
    document.querySelector(".additional-information-block").style.bottom = "-200%";
}