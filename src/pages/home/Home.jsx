import React from "react";
import HomeRegister from "../../components/HomeRegister";
import logo from "../../media/cloud.svg";
import sun from "../../media/sun.svg";
import homepageVideo from "../../media/homepage.mp4";
import "./home.css";

const Home = () => {
  return (
    <>
      <video autoPlay muted loop id="bg_video">
        <source src={homepageVideo} type="video/mp4" />
      </video>
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
        <HomeRegister />
      </section>
    </>
  );
};

export default Home;
