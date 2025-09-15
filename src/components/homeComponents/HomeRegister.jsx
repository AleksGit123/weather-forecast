/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import moon from "../../media/moon.svg";
import sun from "../../media/sun.svg";
import regexpObj from "../../constants/regexp";
import { useNavigate } from "react-router-dom";
import WeatherContextProvider, {
  useWeatherContext,
} from "../../context/WeatherContextProvider";

const HomeRegister = ({ setAlert }) => {
  let { state, dispatch } = useWeatherContext();
  let user = JSON.parse(localStorage.getItem("user"));
  let navigate = useNavigate();
  let [toggle, setToggle] = useState(false);
  let [value, setValue] = useState({
    email: "",
    userName: "",
    password: "",
  });

  let preventSubmit = (e) => {
    e.preventDefault();
  };

  let saveToLStorage = (obj) => {
    localStorage.setItem("user", JSON.stringify(obj));
  };

  let checkUser = () => {
    if (user.email === "" && user.userName === "" && user.password === "") {
    }
  };

  return (
    <>
      <form action="#" className="home__form" onSubmit={preventSubmit}>
        <div className="input__div">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="font"
            autoComplete="email"
            required
            onChange={(e) => {
              setValue((prev) => ({ ...prev, email: e.target.value }));
            }}
          />

          <input
            type={!toggle ? "password" : "text"}
            name="password"
            id="password"
            placeholder="password"
            className={`font`}
            autoComplete="password"
            required
            onChange={(e) => {
              setValue((prev) => ({ ...prev, password: e.target.value }));
            }}
          />
          <img
            src={moon}
            alt="moon svg"
            className={`input__icons moon ${toggle ? "down" : "up"}`}
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <img
            src={sun}
            alt="sun svg"
            className={`input__icons sun_input ${!toggle ? "down" : "up"}`}
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </div>

        <button
          type="submit"
          className="home__btn font"
          onClick={() => {
            if (
              !user ||
              state.user.email !== user.email ||
              state.user.password !== user.password
            ) {
              setAlert("Sign Up Yet");
              console.log("no user");
            } else if (user) {
              navigate("/main");
              dispatch({ ...state, log_in: true });
              console.log(state);
            }
          }}
        >
          Login
        </button>

        <p className="to_signup font ">
          If You Don't Have An Account
          <span className="signup" onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </p>
      </form>
    </>
  );
};

export default HomeRegister;
