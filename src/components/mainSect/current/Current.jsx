/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./current.css";
import getData from "../../../constants/api";
const Current = ({ setLoader }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [current, setCurrent] = useState({});
  const [location, setLocation] = useState({});

  useEffect(() => {
    setLoader(true);
    getData()
      .then((data) => {
        setData(data);
      })
      .then((err) => setError(err)).finally(() => setLoader(false));
  }, [setLoader]);
  console.log(current);
  console.log(location);

  return (
    <>
      <div className="text__div"></div>
    </>
  );
};

export default React.memo(Current);
