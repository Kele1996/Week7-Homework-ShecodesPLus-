function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector(#city);

cityElement.innerHtml = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
}


searchCity(city) {
   let apiKey = "4115af60ae687t4b4d7440a16fdo31fe";
   let apiUrl =  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}




function handleSearchSubmit (event){
event.preventDefault();
let searchInput = document.querySelector("#search-form-input");

searchCity(searchInput.value);
}


let searchFormElement = document.querySelector(#search-form);
SearchFormElement.addEventListener("Submit",handleSearchSubmit);

SearchCity("Pretoria");