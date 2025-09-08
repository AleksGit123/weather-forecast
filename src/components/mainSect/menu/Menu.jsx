/* eslint-disable no-unused-vars */
import React from "react";
import "./menu.css";
import rainGif from "./media/rain.gif";
import citiesGif from "./media/cities-gif.gif";
import settingsGif from "./media/settings.gif";
import siteLogo from "./media/title-logo.svg";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="icon__div" onClick={() => navigate("/")}>
        <img src={siteLogo} alt="weathericon" className="site__logo" />
      </div>

      <div className="weather__div  menu__div">
        <img src={rainGif} alt="rainicon" className="rain__icon" />
        <p className="weather__text abelFont">weather</p>
      </div>

      <div className="city__div  menu__div">
        <img src={citiesGif} alt="listicon" className="list__icon" />
        <p className="cities__text abelFont">cities</p>
      </div>

      <div className="settings__div  menu__div">
        <img src={settingsGif} alt="settingsgif" className="settings__icon" />
        <p className="settings__text abelFont">settings</p>
      </div>
    </>
  );
};

export default Menu;
