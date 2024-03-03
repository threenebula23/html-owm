const searchInput = document.querySelector(".init input");

const searchButton = document.querySelector(".init button");




async function checkWeather(city) {
  const apiKey = "768e0288406389e6e0f9840659813b24";

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&q=`;

  const weatherIcon = document.querySelector(".weather-image video");

  const weather = document.querySelector(".weather");
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status === 404) {
    alert("Проверьте правильность ввода данных");
  } else {
    const data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&#8451";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./source/clear.mp4";
      document.querySelector(".weather_name").innerHTML = "Ясно";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./source/rain.mp4";
      document.querySelector(".weather_name").innerHTML = "Дождь";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./source/mist.mp4";
      document.querySelector(".weather_name").innerHTML = "Туман";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./source/drizzle.mp4";
      document.querySelector(".weather_name").innerHTML = "Морось";
    }else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./source/cluds.mp4";
      document.querySelector(".weather_name").innerHTML = "Облачно";
    }else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "./source/snow.mp4";
      document.querySelector(".weather_name").innerHTML = "Снег";
    }else if (data.weather[0].main == "Thunderstorm") {
      weatherIcon.src = "./source/thunder.mp4";
      document.querySelector(".weather_name").innerHTML = "Гроза";
    }
    weather.style.display = "block";
    errorText.style.display = "none";
  }
}

searchButton.addEventListener("click", () => {
  checkWeather(searchInput.value);
  searchInput.value = "";
});

searchInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    checkWeather(searchInput.value);
    searchInput.value = "";
  }
});