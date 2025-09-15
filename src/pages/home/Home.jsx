/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import HomeRegister from "../../components/homeComponents/HomeRegister";
import logo from "../../media/cloud.svg";
import sun from "../../media/sun.svg";
import homepageVideo from "../../media/homepage.mp4";
import "./home.css";


const Home = () => {
  const [alert, setAlert] = useState("");
  useEffect(() => {
    if (!alert) return;
    const timer = setTimeout(() => {
      setAlert("");
    }, 7000);
    return () => {
      clearTimeout(timer);
    };
  }, [alert, setAlert]);

  return (
    <>
      <video autoPlay muted loop id="bg_video">
        <source src={homepageVideo} type="video/mp4" />
      </video>

      <h2 className={`alert_text font ${alert ? "alert_animation" : "hidden"}`}>
        {alert}!
      </h2>

      <section className="home__section">
        <h1 className="site__title font">ClearCast</h1>

        {/* cloud1 */}
        <img src={logo} alt="cloud" className="little__cloud" />

        {/* cloud2 */}
        <img src={logo} alt="cloud" className="large__cloud" />

        {/* cloud3 */}
        <img src={logo} alt="cloud" className="middle__cloud" />

        {/* cloud4 */}
        <img src={logo} alt="cloud" className="last__cloud" />

        {/* sun */}
        <img src={sun} alt="sun svg" className="sun" />

        {/*log in form  */}
        <HomeRegister setAlert={setAlert} />
      </section>
    </>
  );
};

export default Home;
