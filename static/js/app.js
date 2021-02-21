window.addEventListener("load", () => {
	let longitude, latitude;

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position=>{
			longitude = position.coords.longitude;
			latitude = position.coords.latitude;

			const apiKey = '1a7c99d19865ccaa3aefbb5e42e8a022';
			const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric' + '&appid=' + apiKey;
			
			fetch(url)
			.then(response => {
				return response.json();
			})
			.then(data => {
				console.log(data);
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
