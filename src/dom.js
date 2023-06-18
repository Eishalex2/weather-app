import getWeatherData from "./api";

function printInformation(weatherObject) {
  console.log(weatherObject.city);
  console.log(weatherObject.status);
  // console.log(weatherObject.weatherText);
}

async function test(location) {
  const weatherObject = await getWeatherData(location);
  printInformation(weatherObject);
}

export default test;