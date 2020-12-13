import React, { useState } from "react";
import axios from "axios";
import './App.css';

import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";


export default function App(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ready: false});

function handleResponse(response) {
    setWeatherData({
        ready: true,
        city: response.data.name,
        country: response.data.sys.country,
        date: new Date(response.data.dt*1000),
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity
     } );
    
}

function search (){
    let apiKey = "dee40c83ede943bcc2e823de16f63adf";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
    event.preventDefault();
    search(city);
}

function handleCityChange (event) {
    setCity(event.target.value); 

}

if (weatherData.ready) {
    return (
        <div><div className="WeatherApp">   
                <form onSubmit={handleSubmit}
                    className="search-form">
                    <div className="row">
                        <div class ="col-8">
                    <input 
                    className="form-control form-control-lg shadow-sm border-0 rounded-pill " 
                    type="search"
                    placeholder="Enter a city..." 
                    autoFocus="on"
                    onChange={handleCityChange}/>
                        </div>
                        <div className="col-4">
                            <button type="button" className= "btn btn-sucess w-100 rounded-pill border-0 shadow-sm current-location-button">Current location</button>
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData}/>
            </div>
            </div>
        );
    
} else {

search ();
return <Loader type="Rings" color="#00BFFF" height={80} width={80} className="loader"/>;
    
}
  
};
