/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./menu.css";
import settingsGif from "./media/settings.gif";
import feedbackGif from "./media/feedback.gif";
import siteLogo from "./media/title-logo.svg";
import logOutLogo from "./media/log-out.svg";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const [feedBack, setFeedBack] = useState("");
  const [menuToggle, setMenuToggle] = useState("");
  let navigate = useNavigate();
  return (
    <>
      <div className={`menu__window  ${menuToggle}`}>
        {menuToggle === "feedback" ? (
          <>
            <h2 className="menu__text abelFont">F E E D B A C K</h2>
            <textarea
              name="feedback"
              id="feedback"
              className="feedback__area abelFont"
            ></textarea>
            <button className="send__button abelFont">S E N D</button>
          </>
        ) : menuToggle === "settings" ? (
          <>
            <h2 className="menu__text abelFont">S E T T I N G S</h2>
            <div className="log__out__div">
              <img
                src={logOutLogo}
                alt="log-out-svg"
                className="log__out__svg"
              />
              <p className="log__out abelFont">Log out</p>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="icon__div" onClick={() => navigate("/main")}>
        <img src={siteLogo} alt="weathericon" className="site__logo" />
      </div>

      <div
        className="feedback__div menu__div"
        onClick={() => {
          setMenuToggle("feedback");
        }}
      >
        <img src={feedbackGif} alt="feedback-gif" />
        <p className="feedback__text abelFont">feedback</p>
      </div>

      <div
        className="settings__div  menu__div"
        onClick={() => {
          setMenuToggle("settings");
        }}
      >
        <img src={settingsGif} alt="settingsgif" className="settings__icon" />
        <p className="settings__text abelFont">settings</p>
      </div>
    </>
  );
};

export default React.memo(Menu);
