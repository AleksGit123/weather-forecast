import React from "react";
import Menu from "./menu/Menu";
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
      <section className="menu__sect">
        <Menu />
      </section>
      <section className="current__weather">
        <Current />
      </section>
      <section className="hourly__weather">
        <Hourly />
      </section>
      <section className="details">
        <Details />
      </section>
      <section className="week__forecast">
        <Week />
      </section>
    </>
  );
};

export default MainSect;
