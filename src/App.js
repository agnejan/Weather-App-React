import React, { useState } from "react";
import axios from "axios";
import './App.css';
import ReactAnimatedWeather from "react-animated-weather";


export default function App(props) {

    const [weatherData, setWeatherData] = useState({ready: false});

function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
        ready: true,
        city: response.data.name,
        country: response.data.sys.country,
        time: "10:55",
        date: "25 September, 2020",
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity
     } );
    
}

if (weatherData.ready) {
    return (
        <div><div className="WeatherApp">
                <form className="search-form">
                    <div className="row">
                        <div class ="col-8">
                    <input className="form-control form-control-lg shadow-sm border-0 rounded-pill " type="search"
                        placeholder="Enter a city..." autoFocus="on"/>
                        </div>
                        <div className="col-4">
                            <button type="button" className= "btn btn-sucess w-100 rounded-pill border-0 shadow-sm current-location-button">Current location</button>
                        </div>
                    </div>
                </form>
                <h1>
                    <span>{weatherData.city}</span>, <span>{weatherData.country}</span>
                </h1>
                <h2>
                    {weatherData.time}
                </h2>
                <h3>
                    {weatherData.date}
                </h3>
                <h4>
                   <i className="main-icon"><ReactAnimatedWeather
            icon="RAIN"
            color="grey"
            size={64}
            animate={true}
          /></i>
                    <span className="temperature">{Math.round(weatherData.temperature)} </span><span className="units"><span className="active">°C
                        </span> | <span >°F</span></span>
                </h4>
                <li>
                    <ul>
                        <span className= "text-capitalize">{weatherData.description}</span>
                    </ul>
                    <ul>
                        Humidity: <span>{weatherData.humidity}</span> %
                    </ul>
                    <ul>
                        Wind: <span>{weatherData.wind}</span> m/s
                    </ul>
                </li>
                <div>
                    <div className="next-week" id="next-week">
                        <div className="row">
                            <div className="col-2" >Mon</div>
                            <div className="col-2" >Tue</div>
                            <div className="col-2" >Wed</div>
                            <div className="col-2" >Thu</div>
                            <div className="col-2" >Fri</div>
                            <div className="col-2" >Sat</div>
                        </div>
                        <div className="row">
                            <div className="col-2"><span ></span>+10°C</div>
                            <div className="col-2"><span ></span>+10°C</div>
                            <div className="col-2"><span ></span>+10°C</div>
                            <div className="col-2"><span ></span>+10°C</div>
                            <div className="col-2"><span ></span>+10°C</div>
                            <div className="col-2"><span ></span>+10°C</div>
                        </div>
                        <div className="row">
                            <div className="col-2 images"><i><ReactAnimatedWeather
            icon="RAIN"
            color="grey"
            size={64}
            animate={true}
          /></i></div>
                             <div className="col-2 images"><i><ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="grey"
            size={64}
            animate={true}
          /></i></div>
                            <div className="col-2 images"><i><ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="grey"
            size={64}
            animate={true}
          /></i></div>
                             <div className="col-2 images"><i><ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="grey"
            size={64}
            animate={true}
          /></i></div>
                             <div className="col-2 images"><i><ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="grey"
            size={64}
            animate={true}
          /></i></div>
                             <div className="col-2 images"><i><ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="grey"
            size={64}
            animate={true}
          /></i></div>
                        </div>
                    </div>
                    <script src="src/index.js"></script>
                </div> </div><footer><a href="https://github.com/agnejan/Weather-App-React" target="blank">Open-source code</a> by Agne Januskeviciute</footer></div>
        );
    
} else {
let apiKey = "dee40c83ede943bcc2e823de16f63adf";
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return "Loading...";
    
}
  
};
