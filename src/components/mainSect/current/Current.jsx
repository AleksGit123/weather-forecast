/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./current.css";
import getData from "../../../constants/api";
import Loader from "../../loader/Loader";
import {
  context,
  useWeatherContext,
} from "../../../context/WeatherContextProvider";
const Current = ({ loader, setLoader }) => {
  let { state } = useWeatherContext();
  console.log(state);
  return (
    <>
      <div className="display__current">
        <div className="text__div">
          <div className="location__div">
            <h2 className="country abelFont">{state.location.country}</h2>
            <p className="city abelFont">{state.location.city} </p>
          </div>

          <h1 className="temp abelFont">{state.current}°C</h1>
        </div>
      </div>
    </>
  );
};

export default React.memo(Current);
