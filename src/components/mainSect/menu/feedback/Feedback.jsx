/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useWeatherContext } from "../../../../context/WeatherContextProvider";
const Feedback = () => {
  const [value, setValue] = useState({
    feedback: "",
  });
  let { state, dispatch } = useWeatherContext();
  return (
    <>
      <h2 className="menu__text abelFont">F E E D B A C K</h2>
      <textarea
        name="feedback"
        id="feedback"
        className="feedback__area abelFont"
        onInput={(e) => {
          setValue((prev) => ({ ...prev, feedback: e.target.value }));
        }}
      ></textarea>
      <button
        className="send__button abelFont"
        onClick={() => {
          dispatch({ type: "feedback", payload: value });
        }}
      >
        S E N D
      </button>
    </>
  );
};

export default React.memo(Feedback);
