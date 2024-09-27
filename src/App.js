import React, { useState } from "react";

import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import WeatherForecastChart from './components/WeatherForecastChart';
import { getWeather } from "./utils/api";

import './styles/main.scss';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [weatherData, setWeatherData] = useState({});

  async function handleSearch() {
    // nigdy nie dawac danych z inputa do URL!!
    const data = await getWeather(searchValue);
    setWeatherData(data);
    // setSearchValue("");
  }
  return (
    <main className="App">
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} handleSearch={handleSearch}/>
     {!!Object.keys(weatherData).length && (
      <>
        <Weather currentWeather={{...weatherData.current, ...weatherData.location}}/>
        <WeatherForecastChart forecastWeather={weatherData.forecast.forecastday}/>
      </>
     )}
    </main>)
}

export default App;
