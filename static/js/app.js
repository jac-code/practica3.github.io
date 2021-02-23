window.addEventListener("load", () => {
	let longitude, latitude;
	let temperatureDescription = document.querySelector(".temperature-description");
	let temperatureTemperature = document.querySelector(".temperature-temperature");
	let temperatureFeeling = document.querySelector(".temperature-feeling");
	let temperatureWindSpeed = document.querySelector(".temperature-wind-speed");
	let temperatureWindDegree = document.querySelector(".temperature-wind-degree");
	let temperatureHumidity = document.querySelector(".temperature-humidity");
	let temperaturePressure = document.querySelector(".temperature-pressure");
	let temperatureIcon = document.querySelector(".temperature-icon");
	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position=>{
			longitude = position.coords.longitude;
			latitude = position.coords.latitude;

			const apiKey = '1a7c99d19865ccaa3aefbb5e42e8a022';
			const temp_url = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.460436099999995&lon=-3.8129939&units=metric&exclude=alerts,daily,minutely,hourly&apikey=10de23bdc052b9d4f3ec1d9d649ef8c8'
			//const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric' + '&appid=' + apiKey;
			
			fetch(temp_url)
			.then(response => {
				return response.json();
			})
			.then(data => {
				console.log(data);
				//accedemos a current dentro de los datos
				const { temp, humidity, feels_like, pressure, wind_deg, wind_speed } = data.current;

				temperatureTemperature.textContent = temp;
				temperatureDescription.textContent = data.current.weather[0].description;
				temperatureFeeling.textContent = feels_like;
				temperatureWindSpeed.textContent = wind_speed;
				temperatureWindDegree.textContent = wind_deg;
				temperatureHumidity.textContent = humidity; 
				temperaturePressure.textContent = pressure;
				//temperatureIcon.innerHTML = <img src="icons/${icon}.png"></img>;
				
				const iconName = data.current.weather[0].icon // this will hold the icon
				//temperatureIcon.innerHTML = "http://openweathermap.org/img/w/" + iconName + ".png' alt='Icon depicting current weather.'>"
				temperatureIcon.src = "http://openweathermap.org/img/w/" + iconName + ".png";
			});
		});
	}
});


/*
//Skycons

var skycons = new Skycons({"color": "#FFFAFF"});

skycons.add("animated-icon", Skycons.CLEAR_DAY);

skycons.play();

//Some Global variables

var longitude, latitude, timeHour, timeFull;

//Function to update weather information

function updateWeather (json) {

	longitude = json.coord.lon;
	latitude = json.coord.lat;

	//AJAX request

	const apiKey = '1a7c99d19865ccaa3aefbb5e42e8a022';
	//const url = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=' + apiKey;
	const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric' + '&appid=' + apiKey;

	fetch(url)
	.then(response => response.json())
	.then(data => {
		// do stuff with the data
	})
	.catch(() => {
		msg.textContent = "Please search for a valid city";
	});
}*/
