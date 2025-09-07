import React from "react";
import Menu from "./Menu";
import Current from "./Current";
import Hourly from "./Hourly";
import Details from "./Details";
import Week from "./Week";

const MainSect = () => {
  return (
    <>
      <input
        type="text"
        id="search"
        placeholder="Search"
        className="search abelFont"
      />
      <div className="menu__div">
        <Menu />
      </div>
      <div className="current__weather">
        <Current />
      </div>
      <div className="hourly__weather">
        <Hourly />
      </div>
      <div className="details">
        <Details />
      </div>
      <div className="week__forecast">
        <Week />
      </div>
    </>
  );
};

export default MainSect;
