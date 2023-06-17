const key = "59245b1c1f1e4fff937211922231206"

async function processData(data) {
  const currentForecast = await data;
  const cityName = currentForecast.location.name;
  const weatherText = currentForecast.current.condition.text;
  // more things that I want to display
  const weatherObject = {
    cityName,
    weatherText
  }
  console.log(weatherObject);
}


async function getWeatherData(location) {
  const cityName = location.toLowerCase();
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${cityName}`, {mode: 'cors'});
  const weatherData = await response.json();
  const cityWeatherData = weatherData;
  console.log(cityWeatherData);
  processData(cityWeatherData);
}

export default getWeatherData;