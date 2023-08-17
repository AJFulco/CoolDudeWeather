import React, { useState } from 'react'; // Import useState from React
import logo from './logo.svg';
import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import Forecast from './components/forecast/forecast';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';



function App() {

  const [currentWeather, setCurrentWeather] = useState(null); //set the current weather
  const [forecast, setForcast] = useState(null); //set the forecast
  
  const handleOnSearchChange = (searchData) => {
    //search for that good ol' weather data here. 
    const [lat, lon] = searchData.value.split(" ");

    //grab todays weather
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    //grab the forcast
    const forcastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch,forcastFetch])
      .then(async (response) =>{
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({city: searchData.label, ...weatherResponse});
        setForcast({city: searchData.label, ...forcastResponse});
      })
      .catch((err) => console.log(err));

  }

  console.log(currentWeather);
  console.log(forecast);
  
  return (
    <div className="container">
      <div className='header'>
        <h1 className='appTitle'>Cool Dude Weather</h1>
        <img alt="coolDude" className='coolDude' src={`Cool_Dude.png`} />
      </div>
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
