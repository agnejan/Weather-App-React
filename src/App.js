
import './App.css';
import React from "react";

export default function App() {
  let weatherData = {
    city: "Vilnius",
    country: "LT",
    temperature: 19,
    date: "9 September, 2020",
    time: "10:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 10,
    wind: 3
  };

  return (
    <div className="WeatherApp">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              className=" search-form form-control form-control-lg shadow-sm border-0 rounded-pill "
              type="search"
              placeholder="Enter a city..."
              autoComplete="off"
            />
          </div>
          <div className="col-4">
            <button
              type="button"
              className="current-location-button btn btn-sucess w-100 rounded-pill border-0 shadow-sm"
            >
              Current location
            </button>
          </div>
        </div>
      </form>
      <div>
        <h1>
          <span className="city">{weatherData.city}</span>,{" "}
          <span className="country">{weatherData.country}</span>
        </h1>
        <h2>{weatherData.time}</h2>
        <h3>{weatherData.date}</h3>
        <h4>
          <img
            src={weatherData.imgUrl}
            className="main-icon"
            alt={weatherData.description}
          ></img>
          <span className="temperature">{weatherData.temperature} </span>
          <span className="units">
            <a href="#" className="c-units" className="active">
              °C
            </a>{" "}
            |{" "}
            <a href="#" className="f-units">
              °F
            </a>
          </span>
        </h4>
      </div>
      <li>
        <ul>
          <span className="weather-description">{weatherData.description}</span>
        </ul>
        <ul>
          Humidity: <span className="humidity">{weatherData.humidity}</span> %
        </ul>
        <ul>
          Wind: <span className="wind">{weatherData.wind} </span> m/s
        </ul>
      </li>
    </div>
  );
}
