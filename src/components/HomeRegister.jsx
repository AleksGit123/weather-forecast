/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import moon from "../media/moon.svg";
import sun from "../media/sun.svg";
import regexpObj from "../constants/regexp";
import { useNavigate } from "react-router-dom";
const HomeRegister = () => {
  let navigate = useNavigate();
  let { emailRegexp, passwordRegexp } = regexpObj;
  let [emailClass, setEmailClass] = useState("");
  let [passwordClass, setPasswordClass] = useState("");

  // let [check, setCheck] = useState("");
  let [toggle, setToggle] = useState(false);
  let [value, setValue] = useState({
    email: "",
    password: "",
  });
  let preventSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form action="#" className="home__form" onSubmit={preventSubmit}>
      <div className="input__div">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={`font  ${emailClass}`}
          autoComplete="email"
          required
          onChange={(e) => {
            if (e.target.value === "") {
              setEmailClass("");
            } else if (emailRegexp.test(e.target.value)) {
              setEmailClass("correct");
            } else {
              setEmailClass("incorrect");
            }
            setValue((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <input
          type={!toggle ? "password" : "text"}
          name="password"
          id="password"
          placeholder="password"
          className={`font  ${passwordClass}`}
          autoComplete="password"
          required
          onChange={(e) => {
            if (e.target.value === "") {
              setPasswordClass("");
            } else if (passwordRegexp.test(e.target.value)) {
              setPasswordClass("correct");
              console.log(passwordRegexp.test(e.target.value));
            } else if (!passwordRegexp.test(e.target.value)) {
              setPasswordClass("incorrect");
              console.log(passwordRegexp.test(e.target.value));
            }
            setValue((prev) => ({ ...prev, password: e.target.value }));
          }}
        />
        <img
          src={moon}
          alt="moon svg"
          className={`input__icons moon ${toggle ? "down" : "up"}`}
          onClick={() => {
            console.log("moon Clicked:  " + toggle);
            setToggle(!toggle);
          }}
        />
        <img
          src={sun}
          alt="moon svg"
          className={`input__icons sun_input ${!toggle ? "down" : "up"}`}
          onClick={() => {
            console.log("sun clicked:  " + toggle);

            setToggle(!toggle);
          }}
        />
      </div>

      <button
        type="submit"
        className="home__btn font"
        onClick={() => {
          emailClass === "correct" && passwordClass === "correct"
            ? navigate("/main")
            : navigate("/");
          // console.log(value);
        }}
      >
        Login
      </button>
    </form>
  );
};

export default HomeRegister;
