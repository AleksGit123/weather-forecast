import React, { useState } from "react";
import sun from "../../media/sun.svg";
import moon from "../../media/moon.svg";
import { useNavigate } from "react-router-dom";
import regexpObj from "../../constants/regexp";

const HomeSignUp = () => {
  const [toggle, setToggle] = useState(false);
  const { emailRegexp, userName, passwordRegexp } = regexpObj;
  let user = localStorage.getItem("user");
  const [formData, setFormData] = useState({
    email: { value: "", className: "" },
    username: { value: "", className: "" },
    password: { value: "", className: "" },
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let className = "";

    switch (name) {
      case "email":
        className = emailRegexp.test(value)
          ? "correct"
          : value === ""
          ? ""
          : "incorrect";
        break;
      case "username":
        className = userName.test(value)
          ? "correct"
          : value === ""
          ? ""
          : "incorrect";
        break;
      case "password":
        className = passwordRegexp.test(value)
          ? "correct"
          : value === ""
          ? ""
          : "incorrect";
        break;
      default:
        break;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: { value, className },
    }));
  };

  return (
    <form action="#" className="signup__form">
      <h2 className="signup__text font">Sign up</h2>
      <div className="signup__input__div">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={`font ${formData.email.className}`}
          autoComplete="email"
          required
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          className={`font ${formData.username.className}`}
          onChange={handleInputChange}
        />
        <input
          type={!toggle ? "password" : "text"}
          name="password"
          id="password"
          placeholder="password"
          className={`font ${formData.password.className}`}
          autoComplete="password"
          required
          onChange={handleInputChange}
        />
        <img
          src={moon}
          alt="moon svg"
          className={`input__icons moon ${toggle ? "down" : "up"}`}
          onClick={() => setToggle(!toggle)}
        />
        <img
          src={sun}
          alt="sun svg"
          className={`input__icons sun_input ${!toggle ? "down" : "up"}`}
          onClick={() => setToggle(!toggle)}
        />
      </div>
      <button
        className="signup__button font"
        onClick={() => {
          if (
            !user ||
            (user.email !== formData.email.value &&
              user.username !== formData.username.value &&
              user.password !== formData.password.value)
          ) {
            localStorage.setItem(
              "user",
              JSON.stringify({
                email: formData.email.value,
                userName: formData.username.value,
                password: formData.password.value,
              })
            );
            navigate("/");
          }
        }}
      >
        Sign Up
      </button>
      <p className="to__log__in font">
        If you have an account <span onClick={() => navigate("/")}>Log in</span>
      </p>
    </form>
  );
};

export default HomeSignUp;
