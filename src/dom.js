import getWeatherData from "./api";

const search = document.getElementById('search');
let location = "london";
const infoDisplay = document.getElementById("main-info");
const extraInfo = document.getElementById("extra");
const imperialInfo = document.getElementById("imperial")

function display(weatherObject) {

  // main info
  const cityPara = document.createElement('h3');
  const tempCPara = document.createElement('h2');
  const statusPara = document.createElement('p');
  const uvPara = document.createElement('p');

  const weatherArray = [cityPara, tempCPara, statusPara, uvPara]
  
  cityPara.textContent = weatherObject.city;
  tempCPara.textContent = `${weatherObject.celsius} °C`;
  statusPara.textContent = weatherObject.status;
  uvPara.textContent = `UV level: ${weatherObject.uv}`;

  weatherArray.forEach((item) => {
    infoDisplay.appendChild(item);
  });

  // extra info
  const precipMmPara = document.createElement('p');
  const windKphPara = document.createElement('p');

  precipMmPara.textContent = `Precipitation: ${weatherObject.precipMm}mm`;
  windKphPara.textContent = `Wind speed: ${weatherObject.windKph}kph`;

  extraInfo.appendChild(precipMmPara);
  extraInfo.appendChild(windKphPara);

  // imperial info
  const tempFPara = document.createElement('p');
  const precipInPara = document.createElement('p');
  const windMphPara = document.createElement('p');

  tempFPara.textContent = `Temp: ${weatherObject.fahr} °F`;
  precipInPara.textContent = `Precipitation: ${weatherObject.precipIn}in`;
  windMphPara.textContent = `Wind speed: ${weatherObject.windMph}mph`;

  imperialInfo.appendChild(tempFPara);
  imperialInfo.appendChild(precipInPara);
  imperialInfo.appendChild(windMphPara);
}

async function output() {
  try {
    const weatherObject = await getWeatherData(location);
    console.log(weatherObject);
    display(weatherObject);
  } catch (error) {
    console.log(error);
  }
}

function runOutput(e) {
  e.preventDefault();
  location = search.value;
  infoDisplay.textContent = "";
  extraInfo.textContent = "";
  imperialInfo.textContent = "";
  output();
  search.value = "";
}

search.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    runOutput(e);
  }
});

export default output;