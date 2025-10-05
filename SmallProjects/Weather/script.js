// -----------------------------
// ELEMENT SELECTORS
// -----------------------------
const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

const grantAccessButton = document.querySelector("[data-grantAccess]");

// Weather API key (stored securely in Vite .env)
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

// Track the active tab
let oldTab = userTab;
oldTab.classList.add("current-tab");

// -----------------------------
// TAB SWITCHING FUNCTION
// -----------------------------
function switchTab(newTab) {
    if (newTab !== oldTab) {
        // Remove highlight from old tab
        oldTab.classList.remove("current-tab");
        // Set new tab as active
        oldTab = newTab;
        oldTab.classList.add("current-tab");

        // Show/hide containers depending on active tab
        if (oldTab === searchTab) {
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        } else if (oldTab === userTab) {
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }
    }
}

// Event listeners for tabs
userTab.addEventListener("click", () => switchTab(userTab));
searchTab.addEventListener("click", () => switchTab(searchTab));

// -----------------------------
// SESSION STORAGE FUNCTION
// -----------------------------
function getFromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if (!localCoordinates) {
        grantAccessContainer.classList.add("active");
    } else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserInfo(coordinates);
    }
}

// -----------------------------
// FETCH WEATHER USING COORDINATES
// -----------------------------
async function fetchUserInfo(coordinates) {
    const { lat, long } = coordinates;

    grantAccessContainer.classList.remove("active");
    loadingScreen.classList.add("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) throw new Error("City not found");

        const data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");

        renderWeatherInfo(data);

    } catch (err) {
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.remove("active");

        const resultDiv = document.getElementById("result") || document.body;
        resultDiv.innerHTML = `<img src="not-found.png" alt="Not Found" />`;

        console.error(err);
    }
}

// -----------------------------
// RENDER WEATHER INFO
// -----------------------------
function renderWeatherInfo(weatherInfo) {
    // Select elements
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloud]"); // fixed selector

    // Set values with failsafe defaults
    cityName.innerText = weatherInfo?.name || "Unknown city";
    countryIcon.src = weatherInfo?.sys?.country 
        ? `https://flagcdn.com/144x108/${weatherInfo.sys.country.toLowerCase()}.png` 
        : "path/to/default-flag.png";

    desc.innerText = weatherInfo?.weather?.[0]?.description || "N/A";
    weatherIcon.src = weatherInfo?.weather?.[0]?.icon 
        ? `http://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png` 
        : "path/to/default-weather-icon.png";

    temp.innerText = weatherInfo?.main?.temp != null ? `${weatherInfo.main.temp} °C` : "N/A";
    windspeed.innerText = weatherInfo?.wind?.speed != null ? `${weatherInfo.wind.speed} m/s` : "N/A";
    humidity.innerText = weatherInfo?.main?.humidity != null ? `${weatherInfo.main.humidity}%` : "N/A";
    cloudiness.innerText = weatherInfo?.clouds?.all != null ? `${weatherInfo.clouds.all}%` : "N/A";
}

// -----------------------------
// GET USER LOCATION
// -----------------------------
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            showPosition,
            (error) => {
                alert("Unable to retrieve your location. Please allow location access.");
                console.error(error);
            }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}

// Grant access button click
grantAccessButton.addEventListener("click", getLocation);

// -----------------------------
// SHOW POSITION
// -----------------------------
function showPosition(position) {
    const userCoordinates = {
        lat: position.coords.latitude,
        long: position.coords.longitude
    };
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserInfo(userCoordinates);
}

// -----------------------------
// FETCH WEATHER USING CITY SEARCH
// -----------------------------
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
        userInfoContainer.classList.remove("active");

        const resultDiv = document.getElementById("result") || document.body;
        resultDiv.innerHTML = `<img src="not-found.png" alt="City Not Found" />`;

        console.error(err);
    }
}

// -----------------------------
// HANDLE SEARCH FORM SUBMIT
// -----------------------------
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const cityInput = searchForm.querySelector("[data-searchInput]").value.trim();
    if (!cityInput) return alert("Enter a city name");
    fetchSearchWeatherInfo(cityInput);
});
