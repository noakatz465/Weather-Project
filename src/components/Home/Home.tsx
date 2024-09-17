import React, { FC, useEffect, useState } from 'react';
// import './Home.scss';
import axios from 'axios';
import { WeatherModel } from '../../models/WeatherModel.model';
import Card from '../Card/Card';


interface HomeProps { }

const Home = (props: HomeProps) => {
  const [weatherData, setWeatherData] = useState<WeatherModel | null>(null);

  useEffect(() => {
    const apiKey = '8ee633956bad6ae1965b557a94ecfcba';
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=Eilat&units=metric&appid=${apiKey}&lang=he`)
      .then((response) => setWeatherData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return <div className="Home">
    <h1>מזג האוויר בערים</h1>
    {weatherData ? (
      <Card
        cityName="אילת"
        temp={weatherData.main.temp}
        feels_like={weatherData.main.feels_like}
        humidity={weatherData.main.humidity}
        description={weatherData.weather[0].description}
      />
    ) : (
      <p>טוען נתונים...</p>
    )}
  </div>
}

export default Home;
