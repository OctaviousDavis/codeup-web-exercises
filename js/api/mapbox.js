import { keys } from "../keys.js";

export const getCoordinates = async (searchText) => {
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

export const getAddress = async (lng, lat) => {
	if (Array.isArray(lng)) {
		lat = lng[1];
		lng = lng[0];
	}
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${keys.mapbox}`;
	const options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};
}