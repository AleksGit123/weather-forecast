import React from "react";
import "./main.css";
import MainSect from "../../components/mainSect/MainSect";
import { useWeatherContext } from "../../context/WeatherContextProvider";
const Main = () => {
  const { state } = useWeatherContext();

  return (
    <section className={`main__section ${state.darkMode ? "" : "light__mode"}`}>
      <MainSect />
    </section>
  );
};

export default Main;
