/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./current.css";
import weatherIcon from "./season.svg";
import {
  context,
  useWeatherContext,
} from "../../../context/WeatherContextProvider";
const Current = () => {
  let { state } = useWeatherContext();
  return (
    <>
      <div className="display__current">
        <div className="text__div">
          <div className="location__div">
            <h2 className="country abelFont">{state.location.country}</h2>
            <p className="city abelFont">{state.location.name} </p>
          </div>

          <h1 className="temp abelFont">{Math.round(state.current)}°C</h1>
        </div>
        <div className="detail_weather__div">
          <img
            src={!state.condition.icon ? weatherIcon : state.condition.icon}
            alt="weather-icon"
            className="weather__icon"
          />
          <p className="description abelFont">{state.condition.text}</p>
        </div>
      </div>
    </>
  );
};

export default React.memo(Current);
