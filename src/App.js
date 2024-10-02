import React, {
  useEffect,
  useState
} from "react";

import Header from "./components/Header";
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import WeatherForecastChart from './components/WeatherForecastChart';
import {
  getWeather
} from "./utils/api";

import './styles/main.scss';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  function handleSearch() {
    if (searchValue !== "") {
      getWeather(searchValue)
        .then((data) => {
          if (data.error) {
            setErrorMsg(data.error.message);
            setWeatherData("");
          } else {
            setWeatherData(data);
            setErrorMsg("");
          }
        })
        .catch((err) => {
          console.log(err)
        });
    } else {
      setWeatherData("");
    }
  }

  return (
    <main className = "App" >
      <Header/>
      <SearchBar searchValue = { searchValue } setSearchValue = { setSearchValue } handleSearch = { handleSearch }/>

    {!!errorMsg && ( <p className = "error_message"> { errorMsg } </p>)}
    {!!Object.keys(weatherData).length && (
      <>
        <Weather currentWeather = { { ...weatherData.current, ...weatherData.location }}/>
        <WeatherForecastChart forecastWeather = { weatherData.forecast.forecastday}/>
      </>
      )
    }
    </main>)
  }

  export default App;