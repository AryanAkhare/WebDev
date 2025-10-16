import { API_KEY } from './config.js';

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");
const grantAccessButton = document.querySelector("[data-grantAccess]");
const searchInput = document.querySelector("[data-searchInput]");

let oldTab = userTab;
oldTab.classList.add("current-tab");

// -------------------- Initial Load --------------------
window.addEventListener("DOMContentLoaded", () => {
  getFromSessionStorage();
});

// -------------------- Tab Switching --------------------
function switchTab(newTab) {
  if (newTab !== oldTab) {
    oldTab.classList.remove("current-tab");
    oldTab = newTab;
    oldTab.classList.add("current-tab");

    if (oldTab === searchTab) {
      userInfoContainer.classList.remove("active");
      grantAccessContainer.classList.remove("active");
      searchForm.classList.add("active");
    } else {
      searchForm.classList.remove("active");
      userInfoContainer.classList.remove("active");
      getFromSessionStorage();
    }
  }
}

userTab.addEventListener("click", () => switchTab(userTab));
searchTab.addEventListener("click", () => switchTab(searchTab));

// -------------------- Location Handling --------------------
function getFromSessionStorage() {
  const localCoordinates = sessionStorage.getItem("user-coordinates");
  if (!localCoordinates) {
    grantAccessContainer.classList.add("active");
  } else {
    const coordinates = JSON.parse(localCoordinates);
    fetchUserWeatherInfo(coordinates);
  }
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, () => {
      alert("Unable to retrieve location. Allow location access!");
    });
  } else {
    alert("Geolocation not supported by your browser.");
  }
}

function showPosition(position) {
  const userCoordinates = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
  };
  sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
  fetchUserWeatherInfo(userCoordinates);
}

grantAccessButton.addEventListener("click", getLocation);

// -------------------- Fetch Weather --------------------
async function fetchUserWeatherInfo(coordinates) {
  const { lat, lon } = coordinates;

  grantAccessContainer.classList.remove("active");
  loadingScreen.classList.add("active");

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    loadingScreen.classList.remove("active");
    userInfoContainer.classList.add("active");
    renderWeatherInfo(data);
  } catch (err) {
    loadingScreen.classList.remove("active");
    alert("Unable to fetch weather info");
    console.error(err);
  }
}

async function fetchSearchWeatherInfo(city) {
  loadingScreen.classList.add("active");
  userInfoContainer.classList.remove("active");
  grantAccessContainer.classList.remove("active");

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    loadingScreen.classList.remove("active");
    userInfoContainer.classList.add("active");
    renderWeatherInfo(data);
  } catch (err) {
    loadingScreen.classList.remove("active");
    alert("City not found");
    console.error(err);
  }
}

// -------------------- Render Weather --------------------
function renderWeatherInfo(weatherInfo) {
  const cityName = document.querySelector("[data-cityName]");
  const countryIcon = document.querySelector("[data-countryIcon]");
  const desc = document.querySelector("[data-weatherDesc]");
  const weatherIcon = document.querySelector("[data-weatherIcon]");
  const temp = document.querySelector("[data-temp]");
  const windspeed = document.querySelector("[data-windspeed]");
  const humidity = document.querySelector("[data-humidity]");
  const cloudiness = document.querySelector("[data-cloudiness]");

  cityName.innerText = weatherInfo?.name || "Unknown";
  countryIcon.src = weatherInfo?.sys?.country
    ? `https://flagcdn.com/144x108/${weatherInfo.sys.country.toLowerCase()}.png`
    : "";
  desc.innerText = weatherInfo?.weather?.[0]?.description || "N/A";
  weatherIcon.src = weatherInfo?.weather?.[0]?.icon
    ? `http://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`
    : "";
  temp.innerText = weatherInfo?.main?.temp != null ? `${weatherInfo.main.temp} °C` : "N/A";
  windspeed.innerText = weatherInfo?.wind?.speed != null ? `${weatherInfo.wind.speed} m/s` : "N/A";
  humidity.innerText = weatherInfo?.main?.humidity != null ? `${weatherInfo.main.humidity}%` : "N/A";
  cloudiness.innerText = weatherInfo?.clouds?.all != null ? `${weatherInfo.clouds.all}%` : "N/A";
}

// -------------------- Search Handling --------------------
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityName = searchInput.value.trim();
  if (!cityName) return alert("Enter a city name");
  fetchSearchWeatherInfo(cityName);
});
