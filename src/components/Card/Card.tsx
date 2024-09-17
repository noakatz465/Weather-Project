import React, { FC } from 'react';
// import './Card.scss';

interface CardProps {
  cityName: string;
  temp: number;
  feels_like: number;
  humidity: number;
  description: string;
}

const Card = (props: CardProps) => {
  const getWeatherIcon = (feelsLikeTemp: number) => {
    if (feelsLikeTemp <= 20) return '❄️ קר';
    if (feelsLikeTemp > 20 && feelsLikeTemp < 30) return '🌤️ נעים';
    return '🔥 חם';
  };
  return <div className="Card">
    <h2>{props.cityName}</h2>
    <p>תיאור: {props.description}</p>
    <p>טמפ' נמדדת: {props.temp}°C</p>
    <p>טמפ' מורגשת: {props.feels_like}°C ({getWeatherIcon(props.feels_like)})</p>
    <p>לחות: {props.humidity}%</p>
  </div>
}

export default Card;
