const inputBtn = document.querySelector(".search-btn");

inputBtn.addEventListener("click", searchCity);
// Function on Click
function searchCity() {
  const citySearch = document.querySelector(".search-input").value;
  fetchData(citySearch);
}

// Data Fetching and Display
function fetchData(city) {
  const apiKey = "a54f97a9301460a4e36fcbc47ad8a8c0";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;
  fetch(apiUrl + `&appid=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.name) {
        document.querySelector(".warning").style.display = "none";
        document.querySelector(".display-data").style.display = "flex";
        document.querySelector(".city").innerHTML = data.name.toUpperCase();
        document.querySelector(".temp").innerHTML =
          Math.round(data.main.temp) + "&degC";
        document.querySelector(".humidity").innerHTML =
          data.main.humidity + "%";
        document.querySelector(".wind-speed").innerHTML =
          data.wind.speed + " " + "Km/h";
      } else {
        document.querySelector(".warning").style.display = "block";
        document.querySelector(".display-data").style.display = "none";
      }

      // Weather Codition
      let weatherImage = document.querySelector(".weather-img");

      if (data.weather[0].main == "Clouds") {
        weatherImage.src = "./images/cloudy.png";
      } else if (data.weather[0].main == "Clear") {
        weatherImage.src = "./images/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weatherImage.src = "./images/rainy.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherImage.src = "./images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherImage.src = "./images/mist.png";
      } else if (data.weather[0].main == "Snow") {
        weatherImage.src = "./images/snow.png";
      }
    })
    .catch((e) => console.log(e));
}
