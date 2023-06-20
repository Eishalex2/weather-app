import getWeatherData from "./api";

const search = document.getElementById('search');
const btn = document.querySelector('button');
let location = "london";
const infoDisplay = document.getElementById("info");

function display(weatherObject) {
  const weatherArray = Object.entries(weatherObject);
  weatherArray.forEach((entry) => {
    const para = document.createElement('p');
    para.textContent = `${entry[0]}: ${entry[1]}`;
    infoDisplay.appendChild(para);
  })
}

async function output() {
  try {
    const weatherObject = await getWeatherData(location);
    display(weatherObject);
  } catch (error) {
    console.log(error);
  }
}

function runOutput(e) {
  e.preventDefault();
  location = search.value;
  infoDisplay.textContent = "";
  output();
  search.value = "";
}

search.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    runOutput(e);
  }
});

btn.addEventListener('click', (e) => {
  runOutput(e);
});

btn.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    runOutput(e);
  }
});

export default output;