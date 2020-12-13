import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
    <h1>
                    <span>{props.data.city}</span>, <span>{props.data.country}</span>
                </h1>
                <h2>
                <FormattedDate date={props.data.date} />
                </h2>
                <h4>
                    <span className="main-icon" > 
                    <WeatherIcon code={props.data.icon} alt={props.data.description} /></span>
                   
                    <span className="temperature">{Math.round(props.data.temperature)} </span><span className="units"><span className="active">°C
                        </span> | <span >°F</span></span>
                </h4>
                <li>
                    <ul>
                        <span className= "text-capitalize">{props.data.description}</span>
                    </ul>
                    <ul>
                        Humidity: <span>{props.data.humidity}</span> %
                    </ul>
                    <ul>
                        Wind: <span>{props.data.wind}</span> m/s
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
                </div> </div>   
                );
}