import React from "react";
import pizza1 from "./pizzahaisancopy.png";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <Animated animationIn="flash" isVisible={true} animationInDelay={500}>
            <h1 className="hero-heading">
              Provide customers with the highest quality products
            </h1>
            <p className="hero-description">
              Kha's Pizza - The world's best stovetop pizza maker. Cook a
              perfect pizza every time in just 10 miutes. Your time is valuable,
              so is pizza, get the most out of both.
            </p>
            <Link to="/order/tradi" className=" hero-button">
              Start eating now
            </Link>
          </Animated>
        </div>
        <div className="hero-img-box">
          <Animated animationIn="flash" isVisible={true} animationInDelay={500}>
            <img src={pizza1} className="hero-img" alt="" />
          </Animated>
        </div>
      </div>
    </div>
  );
};

export default Hero;
