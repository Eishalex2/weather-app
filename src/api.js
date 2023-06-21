const key = "59245b1c1f1e4fff937211922231206"


async function getWeatherData(location) {
  try {
    const cityName = location.toLowerCase();
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${cityName}`, {mode: 'cors'});
    const weatherData = await response.json();
    const weatherObject = {
      city: weatherData.location.name,
      status: weatherData.current.condition.text,
      celsius: weatherData.current.temp_c,
      fahr: weatherData.current.temp_f,
      uv: weatherData.current.uv,
      localTime: weatherData.location.localtime,
      precipMm: weatherData.current.precip_mm,
      precipIn: weatherData.current.precip_in,
      windKph: weatherData.current.wind_kph,
      windMph: weatherData.current.wind_mph
    }
    console.log(weatherData);
    return weatherObject;
  } catch (error) {
    console.log(error);
  }
}

export default getWeatherData;