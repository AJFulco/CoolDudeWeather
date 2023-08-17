import React from "react";
import "./current-weather.css";

const CurrentWeather = ({data}) => {
    // The box showing the details for the current weather
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description} </p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="tempurature">{Math.round(data.main.temp)}°C</p>
            </div>
        </div>
    );
};

export default CurrentWeather;