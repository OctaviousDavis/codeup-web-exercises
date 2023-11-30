import {getForecast} from "./api/openweather.js";
import { getCoordinates, getAddress } from "./api/mapbox.js"

(async ()=>{
	const sanAntonioForecast = await getForecast(29.45872, -98.6791838);
	console.log(sanAntonioForecast)
})()