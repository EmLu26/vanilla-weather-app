function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "6798e9t4f3cb9ef4o430784a938ec3f3";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=London&key=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
