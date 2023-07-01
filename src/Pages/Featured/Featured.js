import React from "react";
import logo1 from "./LogoImages/greenacademy.png";
import logo2 from "./LogoImages/forbes.png";
import logo3 from "./LogoImages/thegioididong.png";
import logo4 from "./LogoImages/newyorktime.png";
import logo5 from "./LogoImages/bakery.png";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
