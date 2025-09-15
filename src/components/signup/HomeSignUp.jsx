import React, { useState } from "react";
import sun from "../../media/sun.svg";
import moon from "../../media/moon.svg";
import { useNavigate } from "react-router-dom";
const HomeSignUp = () => {
  const [toggle, setToggle] = useState(false);
  let navigate = useNavigate();
  return (
    <form action="#" className="signup__form">
      <h2 className="signup__text font">Sign up</h2>

      <div className="signup__input__div">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="font"
          autoComplete="email"
          required
        />

        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          className="username font"
        />

        <input
          type={!toggle ? "password" : "text"}
          name="password"
          id="password"
          placeholder="password"
          className={`font`}
          autoComplete="password"
          required
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
      <button className="signup__button font">Sign Up</button>

      <p className="to__log__in font">
        If you have an account{" "}
        <span  onClick={() => navigate("/")}>
          Log in
        </span>
      </p>
    </form>
  );
};

export default HomeSignUp;
