import React from "react";
function Weather({
  currentWeather: {
    condition,
    temp_c,
    feelslike_c,
    uv,
    air_quality,
    humidity,
    wind_dir,
    wind_kph,
    precip_mm,
    name,
    country,
  },
}) {
  return (
    <div className="weather-summary">
      <div className="weather-summary__main-container">
      <h3 className="weather-summary__hdl">
        {name}, {country}
      </h3>
      <div className="weather-summary__main">
        <h4>Today</h4>
        <img src={condition.icon} alt="Weather icon" />
        <p>{condition.text}</p>
      </div>
      </div>
      <div className="weather-summary__details">
        <p>Temperature: {temp_c} &deg;C</p>
        <p>Feelslike temperature: {feelslike_c} &deg;C</p>
        <p>Rain: {precip_mm} mm</p>
        <p>Humidity: {humidity} %</p>
        <p>Air Quality: {air_quality.pm2_5}</p>
        <p>Wind Direction: {wind_dir}</p>
        <p>Wind Speed: {wind_kph} kph</p>
        <p>UV: {uv}</p>
      </div>
    </div>
  );
}

export default Weather;
