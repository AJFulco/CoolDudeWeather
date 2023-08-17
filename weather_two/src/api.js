//this is the big file where everyone get's their API fix from

const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities'; //idk what this does, so im gonna keep it

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1e3b408064msh3c64ce6d6302869p13e9a8jsnf75e6e4c35b5',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "0491b5580cd2f8f2063ff3fad5906db7";