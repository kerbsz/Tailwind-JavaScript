const weatherForm = document.querySelector("#weatherForm");
const cityInput = document.querySelector("#cityInput");
const weatherCard = document.querySelector("#weatherCard");
const apikey = "5922ba920c9605ee06118bca09eb1073";

let cityDisplay = document.querySelector("#cityDisplay");
let dateDisplay = document.querySelector("#dateDisplay");
let temperatureDisplay = document.querySelector("#temperatureDisplay");
let humidityDisplay = document.querySelector("#humidityDisplay");

weatherForm.addEventListener("submit", async event =>{

    event.preventDefault();
    const city = cityInput.value;

    if(city){
        try{
            
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);

        }catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Type a CITY");
    }

});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("COULD NOT FETCH DATA");
    }
    return await response.json();

}
function displayWeatherInfo(data){

    console.log(data)

    const { name: city, 
            main:{temp,humidity},
            sys: {country}, 
            weather: [{description, id}]} = data;

    let errorDisplay = document.querySelector("#errorDisplay");
    errorDisplay.style.display = "none";

    cityDisplay.textContent = `${city},${country}${getWeatherEmoji(id)}`;
    dateDisplay.textContent = new Date().toLocaleDateString();
    temperatureDisplay.textContent = `${(temp - 273.15).toFixed(1)} °C`;
    humidityDisplay.textContent = `Humidity ${humidity}%`;
    
}
function getWeatherEmoji(weatherId){
    const imgDisplay = document.querySelector("#imgDisplay");

    if(weatherId >= 200 && weatherId < 300){
        imgDisplay.src = "weatherimg/thunder.gif"
        return "⛈️";
    }
    if(weatherId >= 300 && weatherId < 500){
        imgDisplay.src = "weatherimg/drizzle.gif"
        return "🌦️"; 
    }
    if(weatherId >= 500 && weatherId < 600){
        imgDisplay.src = "weatherimg/rain.gif"
        return "🌧️"; 
    }
    if(weatherId >= 600 && weatherId < 700){
        imgDisplay.src = "weatherimg/snow.gif"
        return "❄️";
    }
    if(weatherId >= 700 && weatherId < 800){
        imgDisplay.src = "weatherimg/foggy.gif"
        return "🌫️";
    }
    if(weatherId === 800){
        imgDisplay.src = "weatherimg/sun.gif"
        return "☀️"; 
    } 
    if(weatherId > 800 && weatherId < 900){
        imgDisplay.src = "weatherimg/clouds.gif"
        return "☁️";
    }
    return "🌍";

}
function displayError(message){
    let errorDisplay = document.querySelector("#errorDisplay")
    errorDisplay.textContent = message;
    errorDisplay.style.display = "block";

    cityDisplay.textContent = "";
    dateDisplay.textContent = "";
    temperatureDisplay.textContent = "";
    humidityDisplay.textContent = "";
}