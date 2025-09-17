import React from "react";
import "./hourly.css";
import { useWeatherContext } from "../../../context/WeatherContextProvider";
const Hourly = () => {
  let { state } = useWeatherContext();
  let hourly = state.hourly;

  // console.log(state.hourly[0]?.condition.icon);
  // getHours();
  return (
    <>
      {hourly.map((hour, index) => {
        let time = hour.time.split(" ")[1];
        return (
          <article key={time} className={`hourly__card`}>
            <img
              src={hour.condition.icon}
              alt="hourly-icon"
              className="hourly__icon"
            />
            <p className="hour abelFont">{time}</p>
          </article>
        );
      })}
    </>
  );
};

export default React.memo(Hourly);
