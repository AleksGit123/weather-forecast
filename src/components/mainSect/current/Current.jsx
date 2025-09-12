/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./current.css";
import getData from "../../../constants/api";
import Loader from "../../loader/Loader";
const Current = ({ loader, setLoader }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [current, setCurrent] = useState(null);
  const [location, setLocation] = useState(null);
  const [value, setValue] = useState("Georgia");

  useEffect(() => {
    setLoader(true);
    getData(value)
      .then((data) => {
        console.log(data);
        setData(data);
        setCurrent(data.current);
        setLocation(data.location);
      })
      .then((err) => setError(err))
      .finally(() => setLoader(false));
  }, [setLoader, value]);

  return (
    <>
      <input
        type="text"
        id="search"
        placeholder="Search"
        className="search abelFont"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setValue(e.target.value);
          }
        }}
      />
      <div className="display__current">
        <div className="text__div">
          {!data}
          <div className="location__div">
            {!location ? (
              <Loader loader={loader} />
            ) : (
              <h2 className="country abelFont">
                {"Country" && location.country}
              </h2>
            )}

            {!location ? (
              <Loader loader={loader} />
            ) : (
              <p className="city abelFont">{"City" && location.name}</p>
            )}
          </div>
          {!current ? (
            <Loader loader={loader} />
          ) : (
            <h1 className="temp abelFont">
              {"Temperature" && current.temp_c}°C
            </h1>
          )}
        </div>
        <div className="img__div">
          {!current ? (
            <Loader loader={loader} />
          ) : (
            <img
              src={current.condition.icon}
              alt="weather-icon"
              className="weather__icon"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default React.memo(Current);
