import React from "react";
import FormattedDate from "./FormattedDate";

import WeatherIcon from "./WeatherIcon";

import "./App.css";
import WeatherTemperature from "./WeatherTemperature";

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
        <span className="main-icon">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </span>
        <span className="temperature">
          <WeatherTemperature celsius={props.data.temperature} />
        </span>
      </h4>
      <li>
        <ul>
          <span className="text-capitalize">{props.data.description}</span>
        </ul>
        <ul>
          Humidity: <span>{props.data.humidity}</span> %
        </ul>
        <ul>
          Wind: <span>{props.data.wind}</span> m/s
        </ul>
      </li>
    </div>
  );
}
