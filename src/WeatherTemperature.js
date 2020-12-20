import React from "react";

export default function WeatherTemperature(props) {
    return ( 
    <span className="temperature">{Math.round(props.data.temperature)} </span><span className="units"><span className="active">°F
</span> | <span >°F</span></span>
)
}