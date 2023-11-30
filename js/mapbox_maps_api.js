import { keys } from "./keys.js";

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
(async() => {
	const favoritePlaces = [
		{
			name: "Big Ts",
			address: "7535 Garners Ferry Rd, Columbia, SC 29209",
		},
		{
			name: "anthony's",
			address: "Anthony's Dairy Bar, 2200 Two Notch Rd, Columbia, SC 29204",
		},
		{ 	name:"goldenCorral",
			address: "Golden Corral Buffet & Grill, 5300 Forest Dr, Columbia, SC 29206"
		}
	]

	mapboxgl.accessToken = keys.mapbox;
	const map = new mapboxgl.Map({
		container: "map", // container ID
		// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
		style: "mapbox://styles/mapbox/navigation-night-v1", // style URL
		center: [-81.0352, 34.0008], // starting position [lng, lat]
		zoom: 5, // starting zoom
	});
	for (let place of favoritePlaces) {
		const popup = new mapboxgl.Popup().setHTML(`<p>welcome to ${place.name} </p>`);
		const coordinates = await getCoordinates(place.address)
		const marker = new mapboxgl.Marker()
			.setLngLat(coordinates)
			.addTo(map)
			.setPopup(popup);
	}
	console.log(favoritePlaces)
	setTimeout(()=>{
		map.flyTo({
			center: [-81.0352, 34.0008],
			zoom: 7,
			speed: 2,
		})
	},3000)
	setTimeout(()=>{
		map.flyTo({
			center: [-81.0352, 34.0008],
			zoom: 10,
			speed: 2,
		})
	},6000)
})()