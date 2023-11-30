import {keys} from "./keys.js";
const createMap = (coords) => {
	mapboxgl.accessToken = keys.mapbox;
	const map = new mapboxgl.Map({
		container: "map", // container ID
		// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
		style: "mapbox://styles/mapbox/navigation-night-v1", // style URL
		center: coords, // starting position [lng, lat]
		zoom: 10, // starting zoom
	});
	return map;
}

const getCoordinates = async (searchText) => {
	searchText = encodeURIComponent(searchText);
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${keys.mapbox}`;
	const options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};
	const response = await fetch(url, options);
	const data = await response.json();
		return data.features[0].center;
};
const getForecast = async (lng,lat ) =>{
	if(Array.isArray(lng)){
		lat = lng[1]
		lng = lng[0]
	}
	const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${keys.openweather}`;
	const options = {
		method:"GET",
	};
	const response = await fetch(url, options)
	const data = await response.json();
	 return data.daily
}

const renderGetForecast = (fivedays) => {
	for(let i = 0 ; i < 5; i++){
		let weatherSummary = fivedays[i]
		let date = new Date(weatherSummary.dt * 1000)
		let dayOfWeek = `${date.toLocaleString('en-us', {weekday: 'long'})}`
		let img;
		if(`${weatherSummary.weather[0].main}` === 'Rain'){
			img ='./img/rains.png'
			console.log('Rain')
		}else if(`${weatherSummary.weather[0].main}` === 'Clouds'){
			img ='./img/cloud.png'
			console.log('clouds')
		}
		const days = document.createElement('div');
		days.classList.add('fancy')
		days.innerHTML = `
		<h1>${dayOfWeek}</h1>
        <p>${weatherSummary.weather[0].main} <img src=${img} alt="hey"></p>
       	<p>${weatherSummary.weather[0].description}</p>
       	<p class="sexy">${weatherSummary.summary}</p>
       	<p class="temp">${weatherSummary.feels_like.day}\u00B0</p>
    `;
		const weatherDay = document.querySelector('.column')
		weatherDay.appendChild(days);
	}
}

(async ()=>{
	const coords = await getCoordinates("San Antonio, TX")
	const map = createMap(coords);
	const searchForecasts = await getForecast(coords)
	renderGetForecast(searchForecasts)
	let blankInput = document.querySelector('input')
	blankInput.addEventListener('keydown',async (e)=>{
		if(e.code === 'Enter') {
			let textInput =  e.target.value
			const newCoords = await getCoordinates(textInput);
			map.flyTo({
				center: newCoords,
				zoom: 10,
				speed: 2,
			})
			const newForecast = await getForecast(newCoords)
			const weatherDay = document.querySelector('.column')
			weatherDay.innerHTML = '';
			renderGetForecast(newForecast)
		}
	});
})();
