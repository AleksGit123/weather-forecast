/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./menu.css";
import settingsGif from "./media/settings.gif";
import feedbackGif from "./media/feedback.gif";
import siteLogo from "./media/title-logo.svg";
import closeIcon from "./media/close.svg";
import { useNavigate } from "react-router-dom";
import Feedback from "./feedback/Feedback";
import Settings from "./settings/Settings";
const Menu = () => {
  const [menuToggle, setMenuToggle] = useState(null);
  let navigate = useNavigate();
  return (
    <>
      <div
        className={`menu__window  ${
          menuToggle === null ? "hidden" : menuToggle ? "feedback" : "settings"
        } `}
      >
        {menuToggle ? <Feedback /> : !menuToggle ? <Settings /> : null}

        <img
          src={closeIcon}
          alt=" close-icon"
          className="close__icon"
          onClick={() => setMenuToggle(null)}
        />
      </div>

      <div className="icon__div" onClick={() => navigate("/main")}>
        <img src={siteLogo} alt="weathericon" className="site__logo" />
      </div>

      <div
        className="feedback__div menu__div"
        onClick={() => {
          setMenuToggle(true);
        }}
      >
        <img src={feedbackGif} alt="feedback-gif" />
        <p className="feedback__text abelFont">feedback</p>
      </div>

      <div
        className="settings__div  menu__div"
        onClick={() => {
          setMenuToggle(false);
        }}
      >
        <img src={settingsGif} alt="settingsgif" className="settings__icon" />
        <p className="settings__text abelFont">settings</p>
      </div>
    </>
  );
};

export default React.memo(Menu);
