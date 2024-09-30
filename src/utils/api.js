const BASE_URL = 'https://api.weatherapi.com/v1/forecast.json';
export async function getWeather(city) {

    const config = {
        key: process.env.REACT_APP_API_KEY,
        q: city,
        days: 10,
        aqi: 'yes',
        alerts: 'no'
    }

    const response = await fetch(`${BASE_URL}?${new URLSearchParams(config)}`);
    const data = await response.json();
    return data;
}

//TODO status code