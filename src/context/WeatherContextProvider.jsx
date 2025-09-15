import React, { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";
let context = createContext();
const WeatherContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};

export const useWeatherContext = () => {
  let weatherContext = useContext(context);
  if (weatherContext) {
    return weatherContext;
  }
  throw new Error("Weather Context not found");
};

export default WeatherContextProvider;
