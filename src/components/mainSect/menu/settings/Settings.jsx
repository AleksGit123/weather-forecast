/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logOutLogo from "../media/log-out.svg";
import sun from "../../../../media/sun.svg";
import moon from "../../../../media/moon.svg";
import deleteUser from "../media/deleteUser.svg";
import { useWeatherContext } from "../../../../context/WeatherContextProvider";
import { useNavigate } from "react-router-dom";
const Settings = () => {
  let navigate = useNavigate();
  let { state, dispatch } = useWeatherContext();
  const [themeToggle, setthemeToggle] = useState(false);
  return (
    <>
      <h2 className="menu__text abelFont">S E T T I N G S</h2>
      <ul className="settings__list">
        <li
          className="log__out__li settings_li"
          onClick={() => {
            navigate("/");
            dispatch({ type: "log_in", payload: false });
          }}
        >
          <img src={logOutLogo} alt="log-out-svg" className="log__out__svg" />
          <p className="log__out abelFont">Log out</p>
        </li>
        <li
          className="theme__change__div settings_li"
          onClick={() => {
            setthemeToggle(!themeToggle);
          }}
        >
          {themeToggle ? (
            <>
              <img src={sun} alt="moon-svg" />
              <p
                className="light__mode abelFont"
                onClick={() => {
                  console.log(state.darkMode);
                  dispatch({ type: "darkMode", payload: false });
                }}
              >
                Light Mode
              </p>
            </>
          ) : (
            <>
              <img src={moon} alt="moon-svg" />
              <p
                className="dark__mode abelFont"
                onClick={() => {
                  console.log(state.darkMode);
                  dispatch({ type: "darkMode", payload: true });
                }}
              >
                Dark Mode
              </p>
            </>
          )}
        </li>
        <li
          className="delete__acc__li settings_li"
          onClick={() => {
            navigate("/");
            dispatch({ type: "log_in", payload: false });
            localStorage.removeItem("user");
          }}
        >
          <img
            src={deleteUser}
            alt=" delete-user"
            className="delete__account"
          />
          <p className="delete__user abelFont">Delete Account</p>
        </li>
      </ul>
    </>
  );
};

export default React.memo(Settings);
