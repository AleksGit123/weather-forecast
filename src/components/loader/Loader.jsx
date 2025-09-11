import React from "react";
import "./loader.css";
const Loader = ({ loader }) => {
  return (
    <>
      <div className={` ${!loader ? "hidden" : "background"}`}></div>
      <div className="loader">
        <h2 className="loader__text abelFont">
          <span className="l">L</span>
          <span className="o">O</span>
          <span className="a">A</span>
          <span className="d">D</span>
          <span className="i">I</span>
          <span className="n">N</span>
          <span className="g">G</span>
          <span className="dot1">.</span>
          <span className="dot2">.</span>
          <span className="dot3">.</span>
        </h2>
      </div>
    </>
  );
};

export default Loader;
