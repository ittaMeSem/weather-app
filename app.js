var URL_CURRENT_WEATHER =
  "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

document.querySelector("#show").addEventListener("click", showWeather);

function showWeather() {
  let city = document.getElementById("city").value;
  let url = URL_CURRENT_WEATHER + city;

  fetch(url)
    .then((result) => result.json())
    .then((data) => {
      const output = `<div class="city-weather">
            <h1>${data.name}</h1>
            <p>Temperature: ${Math.round(data.main.temp)}°C</p>
            <p>${data.weather[0].description}</p>
            <img src="https://openweathermap.org/img/w/${
              data.weather[0].icon
            }.png">
         </div>`;
      document.querySelector(".weather").innerHTML = output;
      console.log(data);
    });
}
