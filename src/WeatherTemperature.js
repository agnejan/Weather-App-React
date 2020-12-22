import React, { useState } from "react";
import "./App.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function celsiusTemperature(props) {
    let celsiusTemperature = Math.round(props.celsius);
    if (celsiusTemperature > 0) {
      celsiusTemperature = `+${celsiusTemperature}`;
    }
    return celsiusTemperature;
  }

  function fahrenheitTemperature(props) {
    let fahrenheitTemperature = Math.round((props.celsius * 9) / 5 + 32);
    if (fahrenheitTemperature > 0) {
      fahrenheitTemperature = `+${fahrenheitTemperature}`;
    }
    return fahrenheitTemperature;
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{celsiusTemperature(props)} </span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            {" "}
            °F{" "}
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{fahrenheitTemperature(props)} </span>
        <span className="units">
          <a href="/" onClick={convertToCelsius}>
            °C{" "}
          </a>
          | °F{" "}
        </span>
      </span>
    );
  }
}
