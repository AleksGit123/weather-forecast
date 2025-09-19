import React, { useState } from "react";
import "./details.css";
import getHoroscope from "../../../constants/horoscopeApi";
import aries from "./signs/aries.svg";
import taurus from "./signs/taurus.svg";
import gemini from "./signs/gemini.svg";
import cancer from "./signs/cancer.svg";
import leo from "./signs/leo.svg";
import virgo from "./signs/virgo.svg";
import libra from "./signs/libra.svg";
import scorpio from "./signs/scorpio.svg";
import sagittarius from "./signs/sagittarius.svg";
import capricorn from "./signs/capricorn.svg";
import aquarius from "./signs/aquarius.svg";
import pisces from "./signs/pisces.svg";

const Details = ({ loader, setLoader, setError }) => {
  let zodiacSigns = {
    aries,
    taurus,
    gemini,
    cancer,
    leo,
    virgo,
    libra,
    scorpio,
    sagittarius,
    capricorn,
    aquarius,
    pisces,
  };
  const [sign, setSign] = useState({
    date: "",
    horoscope: "",
  });

  let getSign = async (sign) => {
    setLoader(true);
    let horoscope = await getHoroscope(sign)
      .then((data) => data)
      .catch((err) => setError(err))
      .finally(() => setLoader(false));

    setSign((prev) => ({
      ...prev,
      date: horoscope.date,
      horoscope: horoscope.horoscope,
    }));
  };

  console.log(sign);

  return (
    <>
      <section className="zodiac__signs__sect">
        {Object.keys(zodiacSigns).map((key) => (
          <div
            key={key}
            className="zodiac__signs"
            onClick={() => {
              getSign(key);
            }}
          >
            <img src={zodiacSigns[key]} alt={key} className="zodiac__svg" />
            <p className="zodiac__names abelFont">{key}</p>
          </div>
        ))}
      </section>

      <section className="horoscope__sect">
        <p className="horoscope__date abelFont">Date: {sign.date}</p>
        <p className="horoscope__text abelFont">{sign.horoscope}</p>
      </section>
    </>
  );
};

export default React.memo(Details);
