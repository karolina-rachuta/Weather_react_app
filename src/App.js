import React from "react";
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import WeatherForecastChart from './components/WeatherForecastChart';

import './styles/main.scss';

function App() {
  return (
    <main className="App">
      <SearchBar/>
      <Weather/>
      <WeatherForecastChart/>
    </main>
  );
}

export default App;
