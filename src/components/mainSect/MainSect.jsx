/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Menu from "./menu/Menu";
import Current from "./current/Current";
import Hourly from "./Hourly";
import Details from "./Details";
import Week from "./Week";
import Loader from "../loader/Loader";

const MainSect = () => {
  // console.log(data);
  const [loader, setLoader] = useState(false);

  let handleValue = () => {};
  return (
    <>
      {loader && <Loader loader={loader} />}

      <section className="menu__sect">
        <Menu />
      </section>

      <section className="current__weather">
        <Current loader = {loader} setLoader={setLoader} />
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
