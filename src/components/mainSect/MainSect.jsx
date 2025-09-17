/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Menu from "./menu/Menu";
import Hourly from "./hourly/Hourly";
import Details from "./details/Details";
import Week from "./Week";
import Loader from "../loader/Loader";
import WeatherContextProvider, {
  useWeatherContext,
} from "../../context/WeatherContextProvider";
import getData from "../../constants/api";
import Current from "./current/Current";
const MainSect = () => {
  const { state, dispatch } = useWeatherContext();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [value, setValue] = useState("");

  let data = async (value) => {
    setLoader(true);
    getData(value)
      .then((data) => {
        console.log(data);
        dispatch({
          type: "current_temp",
          payload: data.current.temp_c,
        });
        dispatch({ type: "condition", payload: { ...data.current.condition } });
        dispatch({ type: "location", payload: { ...data.location } });

        dispatch({
          type: "hourly",
          payload: data.forecast.forecastday[0].hour,
        });
        dispatch({
          type: "week",
          payload: data.forecast.forecastday,
        });
      })
      .then((err) => setError(err))
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <>
      {loader && <Loader loader={loader} />}

      <input
        type="text"
        id="search"
        placeholder="Search"
        className="search abelFont"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            data(value);
          }
        }}
      />
      <section className="menu__sect">
        <Menu />
      </section>

      <section className="current__weather">
        <Current loader={loader} setLoader={setLoader} />
      </section>

      <section className="hourly__weather">
        <Hourly />
      </section>

      <section className="details">
        <Details />
      </section>

      <section className="week__forecast">
        <Week />
      </section>
    </>
  );
};

export default MainSect;
