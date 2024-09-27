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
    <div style={{ color: "white" }}>
      <h2>
        {name}, {country}
      </h2>
      <p>{condition.text}</p>
      <img src={condition.icon} alt="Weather icon" />
      <p>Temperature [C]: {temp_c}</p>
      <p>Feelslike temperature [C]: {feelslike_c}</p>
      <p>Rain [mm]: {precip_mm}</p>
      <p>Humidity: {humidity}</p>
      <p>Air Quality: {air_quality.pm2_5}</p>
      <p>Wind Direction: {wind_dir}</p>
      <p>Wind Direction [kph]: {wind_kph}</p>
      <p>UV: {uv}</p>
    </div>
  );
}

export default Weather;
