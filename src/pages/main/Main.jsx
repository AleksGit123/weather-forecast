import React, { useEffect } from "react";
import "./main.css";
import getData from "../../constants/api";
import MainSect from "../../components/mainSect/MainSect";
const Main = () => {
  useEffect(() => {
    getData().then((data) => console.log(data));
  }, []);

  return (
    <section className="main__section">
      <MainSect />
    </section>
  );
};

export default Main;
