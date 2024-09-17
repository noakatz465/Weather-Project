import React, { FC, useEffect, useState } from 'react';
import './Home.scss';
import axios from 'axios';
import { WeatherModel } from '../../models/WeatherModel.model';
import Card from '../Card/Card';

interface HomeProps {}

const Home: FC<HomeProps> = (props) => {
  const [weatherData, setWeatherData] = useState<{ [city: string]: WeatherModel | null }>({
    Eilat: null,
    London: null,
    NewYork: null,
    Alaska: null
  });

  const cities = ['Eilat', 'London', 'New York', 'Alaska'];

  useEffect(() => {
    const apiKey = '8ee633956bad6ae1965b557a94ecfcba';

    // יצירת פונקציה פנימית להבטחת שימוש נכון במשתנה city
    const fetchWeather = (city: string) => {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=he`)
        .then((response) => {
          setWeatherData((prevState) => ({
            ...prevState,
            [city]: response.data
            
          }));
          console.log(weatherData);

        })
        .catch((error) => console.error(`Error fetching weather data for ${city}:`, error));
    };

    cities.forEach((city) => {
      fetchWeather(city);
    });
  }, []);

  return (
    <div className="Home">
      <h1>מזג האוויר בערים</h1>
      <div className="cards-container">
        {cities.map((city) =>
          weatherData[city] ? (
            <Card
              key={city}
              cityName={city}
              temp={weatherData[city]!.main.temp}
              feels_like={weatherData[city]!.main.feels_like}
              humidity={weatherData[city]!.main.humidity}
              description={weatherData[city]!.weather[0].description}
            />
          ) : (
            <p key={city}>...טוען נתונים עבור {city}</p>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
